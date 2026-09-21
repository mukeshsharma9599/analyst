import Hero from "../components/Hero"
import CapabilityStrip from "../components/CapabilityStrip"
import FeaturedWork from "../components/FeaturedWork"
import DataStory from "../components/DataStory"
import CaseStudies from "../components/CaseStudies"
import DashboardGallery from "../components/DashboardGallery"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <CapabilityStrip />
      <FeaturedWork />
      <DataStory />
      <CaseStudies />
      <DashboardGallery />
      <Resume />
      <Contact />
    </div>
  )
}
