import Head from "next/head";
import HubspotForm from 'react-hubspot-form'

export default function Company() {
  return (
    <>
      <Head>
        <title>workpath.co | Book a demo</title>
        <meta name="description" content="Workpath helps manage your mobile healthcare team, win more work, and dramatically improve patient experience." />
        <meta property="og:title" content="workpath.co" />
        <meta property="og:image" content="../public/linkedin_og.png" />
      </Head>

        <section className="breakout bgcolor-fog margin-bottom-large">
          <div className="columns margin-y-xlarge fade-in">
            <div className="column column--66 column--center-children">
              <h4 className="color-admiral">See for yourself how Workpath can revolutionize your mobile workflow.</h4>
            </div>
          </div>
        </section>

      <div className="columns">
        <div className="column column--50">
          <p className="large">At Workpath, we're changing the way mobile healthcare gets done. Get a demo to find out how easy it is to see improvements like these:</p>
          <ul className="generic">
            <li>40% Decrease in phone calls</li>
            <li>65% Reduction in Email</li>
            <li>90% Reduction in Scheduling Time</li>
            <li>97% Of Appointments Require No Manual Intervention</li>
            <li>98% Appointment Compliance</li>
            <li>99% Patient Satisfaction</li>
          </ul>
        </div>
        <div className="column column--50">
          <HubspotForm
             portalId='7008422'
             formId='0f0c2b6b-4ac2-4779-ad5b-6636c7161079'
             loading={<div>Loading...</div>}
            />
        </div>
      </div>
    </>
  );
}
