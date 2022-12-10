export enum OrganizerType {
    company = "company", 
    individual = "individual"
}
export default interface Organizer {
    name: string,
    tagline: string,
    link: string,
    type: OrganizerType
    bio: string,
    twitter_handle: string,
    designation: string,
    photo: string,
    created_at: string
} 