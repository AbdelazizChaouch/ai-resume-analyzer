export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 88,
                tips: [
                    {
                        type: "good",
                        tip: "Your resume uses standard section headings that ATS systems can easily identify."
                    },
                    {
                        type: "good", 
                        tip: "Keywords like 'React', 'JavaScript', and 'Frontend' are well-integrated throughout."
                    },
                    {
                        type: "improve",
                        tip: "Consider adding more specific technical skills mentioned in the job posting."
                    },
                    {
                        type: "improve",
                        tip: "Use bullet points consistently throughout all sections for better parsing."
                    }
                ],
            },
            toneAndStyle: {
                score: 82,
                tips: [
                    {
                        type: "good",
                        tip: "Professional and confident tone",
                        explanation: "Your resume maintains a professional tone throughout while demonstrating confidence in your abilities."
                    },
                    {
                        type: "improve",
                        tip: "Vary your action verbs",
                        explanation: "You tend to overuse certain action verbs. Consider using alternatives for variety."
                    },
                    {
                        type: "good",
                        tip: "Appropriate level of detail",
                        explanation: "You provide enough detail to showcase your skills without overwhelming the reader."
                    }
                ],
            },
            content: {
                score: 87,
                tips: [
                    {
                        type: "good",
                        tip: "Strong technical project descriptions",
                        explanation: "Your project descriptions effectively highlight the technologies used and the impact of your work."
                    },
                    {
                        type: "improve",
                        tip: "Add more quantified achievements",
                        explanation: "Adding more specific numbers would strengthen your impact statements."
                    },
                    {
                        type: "good",
                        tip: "Relevant experience for the role",
                        explanation: "Your experience directly aligns with the frontend developer position."
                    }
                ],
            },
            structure: {
                score: 85,
                tips: [
                    {
                        type: "good",
                        tip: "Clear section organization",
                        explanation: "Your resume follows a logical flow with well-defined sections."
                    },
                    {
                        type: "improve",
                        tip: "Optimize white space usage",
                        explanation: "Better balance would improve readability and allow for more content."
                    },
                    {
                        type: "good",
                        tip: "Consistent formatting",
                        explanation: "Your formatting is consistent throughout the document."
                    }
                ],
            },
            skills: {
                score: 90,
                tips: [
                    {
                        type: "good",
                        tip: "Comprehensive technical stack",
                        explanation: "You've included a well-rounded set of frontend technologies."
                    },
                    {
                        type: "good",
                        tip: "Proper skill categorization",
                        explanation: "Your skills are well-organized into categories."
                    },
                    {
                        type: "improve",
                        tip: "Add proficiency levels",
                        explanation: "Consider indicating your proficiency level with each skill."
                    }
                ],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 62,
                tips: [
                    {
                        type: "improve",
                        tip: "Your resume format may not be ATS-friendly. Consider using a simpler template."
                    },
                    {
                        type: "improve", 
                        tip: "Missing key cloud engineering keywords like 'Azure', 'DevOps', and 'Infrastructure as Code'."
                    },
                    {
                        type: "good",
                        tip: "Good use of standard section headers that ATS can recognize."
                    }
                ],
            },
            toneAndStyle: {
                score: 58,
                tips: [
                    {
                        type: "improve",
                        tip: "Inconsistent tone throughout",
                        explanation: "Your resume switches between formal and casual language."
                    },
                    {
                        type: "improve",
                        tip: "Weak action verbs",
                        explanation: "Use stronger action verbs to show ownership."
                    },
                    {
                        type: "good",
                        tip: "Technical accuracy",
                        explanation: "Your technical descriptions are accurate."
                    }
                ],
            },
            content: {
                score: 52,
                tips: [
                    {
                        type: "improve",
                        tip: "Lack of quantified achievements",
                        explanation: "Add numbers like 'reduced deployment time by 40%'."
                    },
                    {
                        type: "improve",
                        tip: "Generic job descriptions",
                        explanation: "Focus on specific projects and their business impact."
                    },
                    {
                        type: "good",
                        tip: "Relevant educational background",
                        explanation: "Your computer science background provides a solid foundation."
                    }
                ],
            },
            structure: {
                score: 48,
                tips: [
                    {
                        type: "improve",
                        tip: "Poor visual hierarchy",
                        explanation: "The resume lacks clear visual separation between sections."
                    },
                    {
                        type: "improve",
                        tip: "Inconsistent formatting",
                        explanation: "Different sections use varying formatting styles."
                    }
                ],
            },
            skills: {
                score: 65,
                tips: [
                    {
                        type: "good",
                        tip: "Relevant cloud technologies listed",
                        explanation: "You've included important cloud platforms and tools."
                    },
                    {
                        type: "improve",
                        tip: "Missing Microsoft Azure emphasis",
                        explanation: "Emphasize Azure-specific skills more prominently."
                    }
                ],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 78,
                tips: [
                    {
                        type: "good",
                        tip: "Strong keyword optimization with iOS-specific terms."
                    },
                    {
                        type: "good", 
                        tip: "Clean, ATS-friendly format with clear section headers."
                    },
                    {
                        type: "improve",
                        tip: "Could benefit from more Apple ecosystem keywords."
                    }
                ],
            },
            toneAndStyle: {
                score: 72,
                tips: [
                    {
                        type: "good",
                        tip: "Confident and results-oriented language",
                        explanation: "Your resume demonstrates confidence in your iOS development abilities."
                    },
                    {
                        type: "improve",
                        tip: "Could be more concise",
                        explanation: "Some descriptions could be tightened up."
                    },
                    {
                        type: "good",
                        tip: "Apple-appropriate terminology",
                        explanation: "You use appropriate iOS and Apple ecosystem terminology."
                    }
                ],
            },
            content: {
                score: 76,
                tips: [
                    {
                        type: "good",
                        tip: "Strong app portfolio showcase",
                        explanation: "Your resume effectively highlights your published apps."
                    },
                    {
                        type: "improve",
                        tip: "Add more collaboration examples",
                        explanation: "Include examples of working with designers and product managers."
                    },
                    {
                        type: "good",
                        tip: "Relevant iOS development experience",
                        explanation: "Your experience covers the full iOS development lifecycle."
                    }
                ],
            },
            structure: {
                score: 74,
                tips: [
                    {
                        type: "good",
                        tip: "Well-organized sections",
                        explanation: "Your resume has a logical flow with clear sections."
                    },
                    {
                        type: "improve",
                        tip: "Projects section could be more prominent",
                        explanation: "Consider moving projects higher up in the layout."
                    }
                ],
            },
            skills: {
                score: 82,
                tips: [
                    {
                        type: "good",
                        tip: "Comprehensive iOS skill set",
                        explanation: "You've covered all the essential iOS development skills."
                    },
                    {
                        type: "improve",
                        tip: "Add more modern iOS technologies",
                        explanation: "Consider adding newer technologies like SwiftUI and Combine."
                    }
                ],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 88,
                tips: [
                    {
                        type: "good",
                        tip: "Your resume uses standard section headings that ATS systems can easily identify."
                    },
                    {
                        type: "good", 
                        tip: "Keywords like 'React', 'JavaScript', and 'Frontend' are well-integrated throughout."
                    },
                    {
                        type: "improve",
                        tip: "Consider adding more specific technical skills mentioned in the job posting."
                    },
                    {
                        type: "improve",
                        tip: "Use bullet points consistently throughout all sections for better parsing."
                    }
                ],
            },
            toneAndStyle: {
                score: 82,
                tips: [
                    {
                        type: "good",
                        tip: "Professional and confident tone",
                        explanation: "Your resume maintains a professional tone throughout while demonstrating confidence in your abilities."
                    },
                    {
                        type: "improve",
                        tip: "Vary your action verbs",
                        explanation: "You tend to overuse certain action verbs. Consider using alternatives for variety."
                    },
                    {
                        type: "good",
                        tip: "Appropriate level of detail",
                        explanation: "You provide enough detail to showcase your skills without overwhelming the reader."
                    }
                ],
            },
            content: {
                score: 87,
                tips: [
                    {
                        type: "good",
                        tip: "Strong technical project descriptions",
                        explanation: "Your project descriptions effectively highlight the technologies used and the impact of your work."
                    },
                    {
                        type: "improve",
                        tip: "Add more quantified achievements",
                        explanation: "Adding more specific numbers would strengthen your impact statements."
                    },
                    {
                        type: "good",
                        tip: "Relevant experience for the role",
                        explanation: "Your experience directly aligns with the frontend developer position."
                    }
                ],
            },
            structure: {
                score: 85,
                tips: [
                    {
                        type: "good",
                        tip: "Clear section organization",
                        explanation: "Your resume follows a logical flow with well-defined sections."
                    },
                    {
                        type: "improve",
                        tip: "Optimize white space usage",
                        explanation: "Better balance would improve readability and allow for more content."
                    },
                    {
                        type: "good",
                        tip: "Consistent formatting",
                        explanation: "Your formatting is consistent throughout the document."
                    }
                ],
            },
            skills: {
                score: 90,
                tips: [
                    {
                        type: "good",
                        tip: "Comprehensive technical stack",
                        explanation: "You've included a well-rounded set of frontend technologies."
                    },
                    {
                        type: "good",
                        tip: "Proper skill categorization",
                        explanation: "Your skills are well-organized into categories."
                    },
                    {
                        type: "improve",
                        tip: "Add proficiency levels",
                        explanation: "Consider indicating your proficiency level with each skill."
                    }
                ],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 62,
                tips: [
                    {
                        type: "improve",
                        tip: "Your resume format may not be ATS-friendly. Consider using a simpler template."
                    },
                    {
                        type: "improve", 
                        tip: "Missing key cloud engineering keywords like 'Azure', 'DevOps', and 'Infrastructure as Code'."
                    },
                    {
                        type: "good",
                        tip: "Good use of standard section headers that ATS can recognize."
                    }
                ],
            },
            toneAndStyle: {
                score: 58,
                tips: [
                    {
                        type: "improve",
                        tip: "Inconsistent tone throughout",
                        explanation: "Your resume switches between formal and casual language."
                    },
                    {
                        type: "improve",
                        tip: "Weak action verbs",
                        explanation: "Use stronger action verbs to show ownership."
                    },
                    {
                        type: "good",
                        tip: "Technical accuracy",
                        explanation: "Your technical descriptions are accurate."
                    }
                ],
            },
            content: {
                score: 52,
                tips: [
                    {
                        type: "improve",
                        tip: "Lack of quantified achievements",
                        explanation: "Add numbers like 'reduced deployment time by 40%'."
                    },
                    {
                        type: "improve",
                        tip: "Generic job descriptions",
                        explanation: "Focus on specific projects and their business impact."
                    },
                    {
                        type: "good",
                        tip: "Relevant educational background",
                        explanation: "Your computer science background provides a solid foundation."
                    }
                ],
            },
            structure: {
                score: 48,
                tips: [
                    {
                        type: "improve",
                        tip: "Poor visual hierarchy",
                        explanation: "The resume lacks clear visual separation between sections."
                    },
                    {
                        type: "improve",
                        tip: "Inconsistent formatting",
                        explanation: "Different sections use varying formatting styles."
                    }
                ],
            },
            skills: {
                score: 65,
                tips: [
                    {
                        type: "good",
                        tip: "Relevant cloud technologies listed",
                        explanation: "You've included important cloud platforms and tools."
                    },
                    {
                        type: "improve",
                        tip: "Missing Microsoft Azure emphasis",
                        explanation: "Emphasize Azure-specific skills more prominently."
                    }
                ],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 78,
                tips: [
                    {
                        type: "good",
                        tip: "Strong keyword optimization with iOS-specific terms."
                    },
                    {
                        type: "good", 
                        tip: "Clean, ATS-friendly format with clear section headers."
                    },
                    {
                        type: "improve",
                        tip: "Could benefit from more Apple ecosystem keywords."
                    }
                ],
            },
            toneAndStyle: {
                score: 72,
                tips: [
                    {
                        type: "good",
                        tip: "Confident and results-oriented language",
                        explanation: "Your resume demonstrates confidence in your iOS development abilities."
                    },
                    {
                        type: "improve",
                        tip: "Could be more concise",
                        explanation: "Some descriptions could be tightened up."
                    },
                    {
                        type: "good",
                        tip: "Apple-appropriate terminology",
                        explanation: "You use appropriate iOS and Apple ecosystem terminology."
                    }
                ],
            },
            content: {
                score: 76,
                tips: [
                    {
                        type: "good",
                        tip: "Strong app portfolio showcase",
                        explanation: "Your resume effectively highlights your published apps."
                    },
                    {
                        type: "improve",
                        tip: "Add more collaboration examples",
                        explanation: "Include examples of working with designers and product managers."
                    },
                    {
                        type: "good",
                        tip: "Relevant iOS development experience",
                        explanation: "Your experience covers the full iOS development lifecycle."
                    }
                ],
            },
            structure: {
                score: 74,
                tips: [
                    {
                        type: "good",
                        tip: "Well-organized sections",
                        explanation: "Your resume has a logical flow with clear sections."
                    },
                    {
                        type: "improve",
                        tip: "Projects section could be more prominent",
                        explanation: "Consider moving projects higher up in the layout."
                    }
                ],
            },
            skills: {
                score: 82,
                tips: [
                    {
                        type: "good",
                        tip: "Comprehensive iOS skill set",
                        explanation: "You've covered all the essential iOS development skills."
                    },
                    {
                        type: "improve",
                        tip: "Add more modern iOS technologies",
                        explanation: "Consider adding newer technologies like SwiftUI and Combine."
                    }
                ],
            },
        },
    },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({jobTitle, jobDescription}: { jobTitle: string; jobDescription: string; }) =>
    `You are an expert in ATS (Applicant Tracking System) and resume analysis.
      Please analyze and rate this resume and suggest how to improve it.
      The rating can be low if the resume is bad.
      Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
      If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
      If available, use the job description for the job user is applying to to give more detailed feedback.
      If provided, take the job description into consideration.
      The job title is: ${jobTitle}
      The job description is: ${jobDescription}
      Provide the feedback using the following format:
      ${AIResponseFormat}
      Return the analysis as an JSON object, without any other text and without the backticks.
      Do not include any other text or comments.`;
