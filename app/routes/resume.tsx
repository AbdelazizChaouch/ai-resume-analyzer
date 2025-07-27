import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {usePuterStore} from "~/lib/puter";
import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import {resumes as demoResumes} from "../../constants";

export const meta = () => ([
    { title: 'Resumind | Review ' },
    { name: 'description', content: 'Detailed overview of your resume' },
])

const Resume = () => {
    const { auth, isLoading, fs, kv } = usePuterStore();
    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const [isDemoMode, setIsDemoMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is authenticated
        if (!isLoading && !auth.isAuthenticated) {
            // Check if this is a demo resume ID
            const demoResume = demoResumes.find(resume => resume.id === id);
            if (demoResume) {
                setIsDemoMode(true);
                setImageUrl(demoResume.imagePath);
                setResumeUrl(demoResume.resumePath);
                setFeedback(demoResume.feedback);
            } else {
                // If not a demo resume, redirect to auth
                navigate(`/auth?next=/resume/${id}`);
            }
        }
    }, [isLoading, auth.isAuthenticated, id])

    useEffect(() => {
        // Only load from Puter if authenticated and not in demo mode
        if (auth.isAuthenticated && !isDemoMode) {
            const loadResume = async () => {
                const resume = await kv.get(`resume:${id}`);

                if(!resume) return;

                const data = JSON.parse(resume);

                const resumeBlob = await fs.read(data.resumePath);
                if(!resumeBlob) return;

                const pdfBlob = new Blob([resumeBlob], { type: 'application/pdf' });
                const resumeUrl = URL.createObjectURL(pdfBlob);
                setResumeUrl(resumeUrl);

                const imageBlob = await fs.read(data.imagePath);
                if(!imageBlob) return;
                const imageUrl = URL.createObjectURL(imageBlob);
                setImageUrl(imageUrl);

                setFeedback(data.feedback);
                console.log({resumeUrl, imageUrl, feedback: data.feedback });
            }

            loadResume();
        }
    }, [id, auth.isAuthenticated, isDemoMode]);

    return (
        <main className="!pt-0">
            <nav className="resume-nav">
                <Link to="/" className="back-button">
                    <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
                    <span className="text-gray-800 text-sm font-semibold">Back to Homepage</span>
                </Link>
            </nav>

            {isDemoMode && (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm">
                                <strong>Demo Mode:</strong> This is sample resume data. <Link to="/auth" className="underline">Sign in with Puter</Link> to upload and analyze your own resumes.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-row w-full max-lg:flex-col-reverse">
                <section className="feedback-section bg-[url('/images/bg-small.svg') bg-cover h-[100vh] sticky top-0 items-center justify-center">
                    {imageUrl && resumeUrl && (
                        <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
                            {isDemoMode ? (
                                // In demo mode, just show the image since PDF path is relative
                                <img
                                    src={imageUrl}
                                    className="w-full h-full object-contain rounded-2xl"
                                    title="resume"
                                />
                            ) : (
                                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={imageUrl}
                                        className="w-full h-full object-contain rounded-2xl"
                                        title="resume"
                                    />
                                </a>
                            )}
                        </div>
                    )}
                </section>
                <section className="feedback-section">
                    <h2 className="text-4xl !text-black font-bold">Resume Review</h2>
                    {feedback ? (
                        <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
                            <Summary feedback={feedback} />
                            <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []} />
                            <Details feedback={feedback} />
                        </div>
                    ) : (
                        <img src="/images/resume-scan-2.gif" className="w-full" />
                    )}
                </section>
            </div>
        </main>
    )
}
export default Resume
