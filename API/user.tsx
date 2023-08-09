import { FaGithub } from "react-icons/fa";

interface userType {
  bio?: string;
  social_accounts: socialMediaType[];
}

interface socialMediaType {
  provider?: string;
  url?: string;
  icon?: JSX.Element;
}

export const getUserData = async (
  username: string
): Promise<userType | undefined> => {
  try {
    const [res, socRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((res) =>
        res.json()
      ),
      fetch(`https://api.github.com/users/${username}/social_accounts`).then(
        (res) => res.json()
      ),
    ]);

    const filteredSoc = socRes.filter(
      (obj: socialMediaType) =>
        obj.provider === "linkedin" || obj.provider === "twitter"
    );

    const githubUrl = {
      provider: "github",
      url: `https://github.com/${username}`,
      icon: <FaGithub />,
    };

    const social_accounts = [githubUrl, ...filteredSoc];
    const userData: userType = {
      social_accounts: social_accounts,
    };

    return { ...res, ...userData };
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
};
