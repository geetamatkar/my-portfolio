//import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/geeta-matkar-a7a820179/"
                target="_blank"
                rel="noreferrer"
            >
                <img className="h-7" alt="linkedin-link" src="../assets/linkedin.png" />
            </a>


            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/geetamatkar"
                target="_blank"
                rel="noreferrer"
            >
                {<img className="object-scale-down h-7 " alt="github-link" src="../assets/github-logo-icon_.png" />}
               { /*<GitHubIcon className="object-scale-down h-7" /> */}
            </a>

        </div>
    )

}

export default SocialMediaIcons;