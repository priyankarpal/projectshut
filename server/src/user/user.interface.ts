interface SocialsMedia{
 name: string;
 link: string;
}

export interface UserType {
  name: string
  bio: string
  socials: SocialsMedia[]
  image: string
}