//import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMediaIcons = () => {
    return (
        <div className="flex flex-row justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/geeta-matkar-a7a820179/"
                target="_blank"
                rel="noreferrer"
            >
                <img className="object-scale-down h-8 "  alt="linkedin-link" src="../assets/linkedin.png" />
            </a>


            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/geetamatkar"
                target="_blank"
                rel="noreferrer"
            >
                {<img className="object-scale-down h-8" alt="github-link" src="../assets/github-2-img.png" />}
               { /*<GitHubIcon className="object-scale-down h-7" /> */}
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://drive.google.com/file/d/12aFhZ4m1ZeutMwpr4IJOxr6BUOpupReb/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
            >
                {<img className="object-scale-down h-8 " alt="resume-link" src="../assets/res-bg-doc.png" />}
               
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="mailto:geetamatkar1@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                {<img className=" h-8 object-contain rounded-md " alt="email-link" src="../assets/gmail-square.png" />}
               
            </a>


            

        </div>
    )

}

export default SocialMediaIcons;