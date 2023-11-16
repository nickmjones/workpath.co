import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";
import Hero from "../components/hero";

export default function Casestudies() {
  return (
    <>
      <Head>
        <title>workpath.co | Case studies</title>
        <meta name="description" content="Workpath helps manage your mobile healthcare team, win more work, and dramatically improve patient experience." />
        <meta property="og:title" content="workpath.co" />
        <meta property="og:image" content="../public/linkedin_og.png" />
      </Head>

      <Hero
        section="Case Studies"
        headline="At the forefront of on-demand healthcare. Let's blaze a trail."
        image="hero_cases@2x.png"
      />

      <div className="columns columns--wrap margin-bottom-large">
        <div className="column column--50 margin-y-small">
          <p className="small color-quartz">Case Study</p>
          <p className="large">Outpatient Services</p>
          <p className="medium">Memorial Sloan Kettering Cancer Center improved patient experience by implementing at-home phlebotomy appointments.</p>
          <Link legacyBehavior href="/casestudies/outpatient-services"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-quartz">Case Study</p>
          <p className="large">Reference Labs</p>
          <p className="medium">One of the largest reference laboratories in North America leveraged Workpath to implement a new mobile phlebotomy program to improve the patient experience while increasing compliance with physician orders.</p>
          <Link legacyBehavior href="/casestudies/reference-labs"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-quartz">Case Study</p>
          <p className="large">Mobile Phlebotomy</p>
          <p className="medium">Phlebotek, the largest phlebotomy solutions agency in the U.S., leveraged Workpath to scale operations while minimizing costs.</p>
          <Link legacyBehavior href="/casestudies/mobile-phlebotomy"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-quartz">Case Study</p>
          <p className="large">Medical Imaging</p>
          <p className="medium">The Siemens Healthineers’ CrewPlace&trade; platform and Roshal Imaging Services leverage Workpath to alleviate staffing shortages and expand patient access to advanced diagnostic services.</p>
          <Link legacyBehavior href="/casestudies/medical-imaging"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-quartz">Case Study</p>
          <p className="large">Paramedical Insurance Exams</p>
          <p className="medium">High-growth paramedical examiner, Paramed Express, leverages Workpath to scale operations.</p>
          <Link legacyBehavior href="/casestudies/paramedical-exams"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-quartz">Case Study</p>
          <p className="large">On-site Drug &amp; Alcohol Testing</p>
          <p className="medium">A major on-demand drug testing company leverages Workpath to halve collector response times.</p>
          <Link legacyBehavior href="/casestudies/testing"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-scrub">Use Case</p>
          <p className="large">Telemedicine</p>
          <p className="medium">Workpath is allowing telemedicine companies to expand service offerings without the need for robust operational teams.</p>
          <Link legacyBehavior href="/casestudies/telemedicine"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-scrub">Use Case</p>
          <p className="large">Home Health</p>
          <p className="medium">Workpath has unlocked operational efficiencies that allow home health organizations to optimize labor utilization and increase patient volumes.</p>
          <Link legacyBehavior href="/casestudies/home-health"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
        <div className="column column--50 margin-y-small">
          <p className="small color-scrub">Use Case</p>
          <p className="large">Remote Visit Clinical Trials</p>
          <p className="medium">Clinical research organizations using Workpath have achieved improved compliance, increased recruitment, and better patient retention.</p>
          <Link legacyBehavior href="/casestudies/remote-clinical-trials"><a><Button type="ghost" text="Read Now" /></a></Link>
        </div>
      </div>

    </>
  );
}
