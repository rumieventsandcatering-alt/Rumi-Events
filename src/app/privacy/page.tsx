import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Rumi Events.',
};

export default function PrivacyPolicy() {
    const currentDate = new Date().toLocaleDateString('en-IN', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="bg-stone-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Privacy Policy</h1>
                <p className="text-stone-600 mb-12">Last updated: {currentDate}</p>

                <div className="prose prose-stone prose-lg max-w-none prose-headings:text-primary-900">
                    <p>
                        At Rumi Events, accessible from rumievents.com, one of our main priorities is the privacy of our visitors.
                        This Privacy Policy document contains types of information that is collected and recorded by Rumi Events
                        and how we use it.
                    </p>

                    <p>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate
                        to contact us.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it,
                        will be made clear to you at the point we ask you to provide your personal information.
                    </p>
                    <p>
                        If you contact us directly, we may receive additional information about you such as your name, email
                        address, phone number, the contents of the message and/or attachments you may send us, and any other
                        information you may choose to provide.
                    </p>
                    <p>
                        When you submit an enquiry through our contact form, we collect the mobile number and event-related
                        message provided to be able to contact you regarding your event.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new services, features, and functionality</li>
                        <li>Communicate with you, directly or through our customer service team, to provide you with updates and other information relating to your enquiry</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>

                    <h2>3. Log Files</h2>
                    <p>
                        Rumi Events automatically collects and stores certain information in server logs. These are standard
                        procedures for hosting companies and a part of hosting services' analytics. The information collected by
                        log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date
                        and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any
                        information that is personally identifiable.
                    </p>

                    <h2>4. Third-Party Privacy Policies</h2>
                    <p>
                        Rumi Events's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you
                        to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                        It may include their practices and instructions about how to opt-out of certain options.
                    </p>

                    <h2>5. GDPR Data Protection Rights</h2>
                    <p>
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is
                        entitled to the following:
                    </p>
                    <ul>
                        <li><strong>The right to access</strong> - You have the right to request copies of your personal data.</li>
                        <li><strong>The right to rectification</strong> - You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
                        <li><strong>The right to erasure</strong> - You have the right to request that we erase your personal data, under certain conditions.</li>
                    </ul>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
                        <strong> hello@rumievents.com</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}
