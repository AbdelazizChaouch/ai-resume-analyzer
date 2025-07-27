import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {resumes as demoResumes} from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    // Check if user is authenticated, if not show demo mode
    const checkAuth = () => {
      if (!auth.isAuthenticated) {
        // Instead of redirecting to auth, show demo mode
        setIsDemoMode(true);
        setResumes(demoResumes);
        setLoadingResumes(false);
      } else {
        setIsDemoMode(false);
        // Load real resumes if authenticated
        const loadResumes = async () => {
          setLoadingResumes(true);
          const resumes = (await kv.list('resume:*', true)) as KVItem[];
          const parsedResumes = resumes?.map((resume) => (
              JSON.parse(resume.value) as Resume
          ))
          setResumes(parsedResumes || []);
          setLoadingResumes(false);
        }
        loadResumes();
      }
    };

    checkAuth();
  }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    {isDemoMode && (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm">
              <strong>Demo Mode:</strong> You're viewing sample data. <Link to="/auth" className="underline">Sign in with Puter</Link> to upload and analyze your own resumes.
            </p>
          </div>
        </div>
      </div>
    )}

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        {!loadingResumes && resumes?.length === 0 ? (
            <h2>No resumes found. Upload your first resume to get feedback.</h2>
        ): (
          <h2>{isDemoMode ? "Explore sample resume analyses below:" : "Review your submissions and check AI-powered feedback."}</h2>
        )}
      </div>
      {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img src="/images/resume-scan-2.gif" className="w-[200px]" />
          </div>
      )}

      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

      {!loadingResumes && resumes?.length === 0 && !isDemoMode && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
              Upload Resume
            </Link>
          </div>
      )}

      {isDemoMode && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link to="/auth" className="primary-button w-fit text-xl font-semibold">
              Sign In to Upload Your Resume
            </Link>
          </div>
      )}
    </section>
  </main>
}
