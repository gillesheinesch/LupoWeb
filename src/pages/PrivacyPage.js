import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { FlexboxGrid, Nav } from "rsuite";
import TopNavbar from "../components/TopNavbar";

function PrivacyPage() {
    const { t } = useTranslation();
    const history = useHistory();

    return (
      <Fragment>
        <TopNavbar />
        <FlexboxGrid justify="center" style={{marginTop: '3em'}}>
          <FlexboxGrid.Item colspan={15}>
            <Nav appearance="subtle" justified style={{marginBottom: '2em'}}>
              <Nav.Item onSelect={ () => history.push('/terms/imprint') }> { t('imprint') } </Nav.Item>
              <Nav.Item active onSelect={ () => history.push('/terms/privacy') }> { t('privacy') } </Nav.Item>
            </Nav>

            <div>
            <h1>Privacy Policy</h1>
                    <h2>1. An overview of data protection</h2>
                    <h3>General information</h3>
                    <p>The following information will provide you with an easy to navigate overview of what will happen
                        with your personal data when you visit our website. The term “personal data” comprises all data
                        that can be used to personally identify you. For detailed information about the subject matter
                        of data protection, please consult our Data Protection Declaration, which we have included
                        beneath this copy.</p>
                    <h3>Data recording on our website</h3>
                    <p><strong>Who is the responsible party for the recording of data on this website (i.e. the
                            “controller”)?</strong></p>
                    <p>The data on this website is processed by the operator of the website, whose contact information
                        is available under section “Information Required by Law” on this website.</p>
                    <p><strong>How do we record your data?</strong></p>
                    <p>We collect your data as a result of your sharing of your data with us. This may, for instance be
                        information you enter into our contact form.</p>
                    <p>Our IT systems automatically record other data when you visit our website. This data comprises
                        primarily technical information (e.g. web browser, operating system or time the site was
                        accessed). This information is recorded automatically when you access our website.</p>
                    <p><strong>What are the purposes we use your data for?</strong></p>
                    <p>A portion of the information is generated to guarantee the error free provision of the website.
                        Other data may be used to analyse your user patterns.</p>
                    <p><strong>What rights do you have as far as your information is concerned?</strong></p>
                    <p>You have the right to receive information about the source, recipients and purposes of your
                        archived personal data at any time without having to pay a fee for such disclosures. You also
                        have the right to demand that your data are rectified, blocked or eradicated. Please do not
                        hesitate to contact us at any time under the address disclosed in section “Information Required
                        by Law” on this website if you have questions about this or any other data protection related
                        issues. You also have the right to log a complaint with the competent supervising agency.</p>
                    <p>Moreover, under certain circumstances, you have the right to demand the restriction of the
                        processing of your personal data. For details, please consult the Data Protection Declaration
                        under section “Right to Restriction of Data Processing.”</p>
                    <h3>Analysis tools and tools provided by third parties</h3>
                    <p>There is a possibility that your browsing patterns will be statistically analysed when your
                        visit our website. Such analyses are performed primarily with cookies and with what we refer to
                        as analysis programmes. As a rule, the analyses of your browsing patterns are conducted
                        anonymously; i.e. the browsing patterns cannot be traced back to you. You have the option to
                        object to such analyses or you can prevent their performance by not using certain tools. For
                        detailed information about this, please consult our Data Protection Declaration below.</p>
                    <p>You do have the option to object to such analyses. We will brief you on the objection options in
                        this Data Protection Declaration.</p>
                    <h2>2. General information and mandatory information</h2>
                    <h3>Data protection</h3>
                    <p>The operators of this website and its pages take the protection of your personal data very
                        seriously. Hence, we handle your personal data as confidential information and in compliance
                        with the statutory data protection regulations and this Data Protection Declaration.</p>
                    <p>Whenever you use this website, a variety of personal information will be collected. Personal
                        data comprises data that can be used to personally identify you. This Data Protection
                        Declaration explains which data we collect as well as the purposes we use this data for. It
                        also explains how, and for which purpose the information is collected.</p>
                    <p>We herewith advise you that the transmission of data via the Internet (i.e. through e-mail
                        communications) may be prone to security gaps. It is not possible to completely protect data
                        against third party access.</p>
                    <h3>Information about the responsible party (referred to as the “controller” in the GDPR)</h3>
                    <p>The data processing controller on this website is:</p>
                    <p>11, rue de Hoimesbusch<br />
                        L-5350 Schuttrange<br />
                        Luxemburg</p>

                    <p>Phone: MISSING PHONENUMBER<br />
                        E-mail: MISSING EMAIL</p>
                    <p>The controller is the natural person or legal entity that single-handedly or jointly with others
                        makes decisions as to the purposes of and resources for the processing of personal data (e.g.
                        names, e-mail addresses, etc.).</p>
                    <h3>Revocation of your consent to the processing of data</h3>
                    <p>A wide range of data processing transactions are possible only subject to your express consent.
                        You can also revoke at any time any consent you have already given us. To do so, all you are
                        required to do is sent us an informal notification via e-mail. This shall be without prejudice
                        to the lawfulness of any data collection that occurred prior to your revocation.</p>
                    <h3>Right to object to the collection of data in special cases; right to object to direct
                        advertising (Art. 21 GDPR)</h3>
                    <p><strong>In the event that data are processed on the basis of Art. 6 Sect. 1 lit. e or f GDPR,
                            you have the right to at any time object to the processing of your personal data based on
                            grounds arising from your unique situation. This also applies to any profiling based on
                            these provisions. To determine the legal basis, on which any processing of data is based,
                            please consult this Data Protection Declaration. If you log an objection, we will no longer
                            process your affected personal data, unless we are in a position to present compelling
                            protection worthy grounds for the processing of your data, that outweigh your interests,
                            rights and freedoms or if the purpose of the processing is the claiming, exercising or
                            defence of legal entitlements (objection pursuant to Art. 21 Sect. 1 GDPR).</strong></p>
                    <p><strong>If your personal data is being processed in order to engage in direct advertising, you
                            have the right to at any time object to the processing of your affected personal data for
                            the purposes of such advertising. This also applies to profiling to the extent that it is
                            affiliated with such direct advertising. If you object, your personal data will
                            subsequently no longer be used for direct advertising purposes (objection pursuant to Art.
                            21 Sect. 2 GDPR).</strong></p>
                    <h3>Right to log a complaint with the competent supervisory agency</h3>
                    <p>In the event of violations of the GDPR, data subjects are entitled to log a complaint with a
                        supervisory agency, in particular in the member state where they usually maintain their
                        domicile, place of work or at the place where the alleged violation occurred. The right to log
                        a complaint is in effect regardless of any other administrative or court proceedings available
                        as legal recourses.</p>
                    <h3>Right to data portability</h3>
                    <p>You have the right to demand that we hand over any data we automatically process on the basis of
                        your consent or in order to fulfil a contract be handed over to you or a third party in a
                        commonly used, machine readable format. If you should demand the direct transfer of the data to
                        another controller, this will be done only if it is technically feasible.</p>
                    <h3>SSL and/or TLS encryption</h3>
                    <p>For security reasons and to protect the transmission of confidential content, such as purchase
                        orders or inquiries you submit to us as the website operator, this website uses either an SSL
                        or a TLS encryption programme. You can recognise an encrypted connection by checking whether
                        the address line of the browser switches from “http://” to “https://” and also by the
                        appearance of the lock icon in the browser line.</p>
                    <p>If the SSL or TLS encryption is activated, data you transmit to us cannot be read by third
                        parties.</p>
                    <h3>Encrypted payment transactions on this website</h3>
                    <p>If you are under an obligation to share your payment information (e.g. account number if you
                        give us the authority to debit your bank account) with us after you have entered into a
                        fee-based contract with us, this information is required to process payments.</p>
                    <p>Payment transactions using common modes of paying (Visa/MasterCard, debit to your bank account)
                        are processed exclusively via encrypted SSL or TLS connections. You can recognise an encrypted
                        connection by checking whether the address line of the browser switches from “http://” to
                        “https://” and also by the appearance of the lock icon in the browser line.</p>
                    <p>If the communication with us is encrypted, third parties will not be able to read the payment
                        information you share with us.</p>
                    <h3>Information about, blockage, rectification and eradication of data</h3>
                    <p>Within the scope of the applicable statutory provisions, you have the right to at any time
                        demand information about your archived personal data, their source and recipients as well as
                        the purpose of the processing of your data. You may also have a right to have your data
                        rectified, blocked or eradicated. If you have questions about this subject matter or any other
                        questions about personal data, please do not hesitate to contact us at any time at the address
                        provided in section “Information Required by Law.”</p>
                    <h3>Right to demand processing restrictions</h3>
                    <p>You have the right to demand the imposition of restrictions as far as the processing of your
                        personal data is concerned. To do so, you may contact us at any time at the address provided in
                        section “Information Required by Law.” The right to demand restriction of processing applies in
                        the following cases:</p>
                    <ul>
                        <li>In the event that you should dispute the correctness of your data archived by us, we will
                            usually need some time to verify this claim. During the time that this investigation is
                            ongoing, you have the right to demand that we restrict the processing of your personal
                            data.</li>
                        <li>If the processing of your personal data was/is conducted in an unlawful manner, you have
                            the option to demand the restriction of the processing of your data in lieu of demanding
                            the eradication of this data.</li>
                        <li>If we do not need your personal data any longer and you need it to exercise, defend or
                            claim legal entitlements, you have the right to demand the restriction of the processing of
                            your personal data instead of its eradication.</li>
                        <li>If you have raised an objection pursuant to Art. 21 Sect. 1 GDPR, your rights and our
                            rights will have to be weighed against each other. As long as it has not been determined
                            whose interests prevail, you have the right to demand a restriction of the processing of
                            your personal data.</li>
                    </ul>
                    <p>If you have restricted the processing of your personal data, these data – with the exception of
                        their archiving – may be processed only subject to your consent or to claim, exercise or defend
                        legal entitlements or to protect the rights of other natural persons or legal entities or for
                        important public interest reasons cited by the European Union or a member state of the EU.</p>
                    <h3>Rejection of unsolicited e-mails</h3>
                    <p>We herewith object to the use of contact information published in conjunction with the mandatory
                        information to be provided in section “Information Required by Law” to send us promotional and
                        information material that we have not expressly requested. The operators of this website and
                        its pages reserve the express right to take legal action in the event of the unsolicited
                        sending of promotional information, for instance via SPAM messages.</p>
                    <h2>3. Recording of data on our website</h2>
                    <h3>Cookies</h3>
                    <p>In some instances, our website and its pages use so-called cookies. Cookies do not cause any
                        damage to your computer and do not contain viruses. The purpose of cookies is to make our
                        website more user friendly, effective and more secure. Cookies are small text files that are
                        placed on your computer and stored by your browser.</p>
                    <p>Most of the cookies we use are so-called “session cookies.” They are automatically deleted after
                        your leave our site. Other cookies will remain archived on your device until you delete them.
                        These cookies enable us to recognise your browser the next time you visit our website.</p>
                    <p>You can adjust the settings of your browser to make sure that you are notified every time
                        cookies are placed and to enable you to accept cookies only in specific cases or to exclude the
                        acceptance of cookies for specific situations or in general and to activate the automatic
                        deletion of cookies when you close your browser. If you deactivate cookies, the functions of
                        this website may be limited.</p>
                    <p>Cookies that are required for the performance of the electronic communications transaction or to
                        provide certain functions you want to use (e.g. the shopping cart function), are stored on the
                        basis of Art. 6 Sect. 1 lit. f GDPR. The website operator has a legitimate interest in storing
                        cookies to ensure the technically error free and optimised provision of the operator’s
                        services. If other cookies (e.g. cookies for the analysis of your browsing patterns) should be
                        stored, they are addressed separately in this Data Protection Declaration.</p>
                    <h3>Server log files</h3>
                    <p>The provider of this website and its pages automatically collects and stores information in
                        so-called server log files, which your browser communicates to us automatically. The
                        information comprises:</p>
                    <ul>
                        <li>The type and version of browser used</li>
                        <li>The used operating system</li>
                        <li>Referrer URL</li>
                        <li>The hostname of the accessing computer</li>
                        <li>The time of the server inquiry</li>
                        <li>The IP address</li>
                    </ul>
                    <p>This data is not merged with other data sources.</p>
                    <p>This data is recorded on the basis of Art. 6 Sect. 1 lit. f GDPR. The operator of the website
                        has a legitimate interest in the technically error free depiction and the optimization of the
                        operator’s website. In order to achieve this, server log files must be recorded.</p>
                    <h3>Contact form</h3>
                    <p>If you submit inquiries to us via our contact form, the information provided in the contact form
                        as well as any contact information provided therein will be stored by us in order to handle
                        your inquiry and in the event that we have further questions. We will not share this
                        information without your consent.</p>
                    <p>Hence, the processing of the data entered into the contact form occurs exclusively based on your
                        consent (Art. 6 Sect. 1 lit. a GDPR). You have the right to revoke at any time any consent you
                        have already given us. To do so, all you are required to do is sent us an informal notification
                        via e-mail. This shall be without prejudice to the lawfulness of any data collection that
                        occurred prior to your revocation.</p>
                    <p>The information you have entered into the contact form shall remain with us until you ask us to
                        eradicate the data, revoke your consent to the archiving of data or if the purpose for which
                        the information is being archived no longer exists (e.g. after we have concluded our response
                        to your inquiry). This shall be without prejudice to any mandatory legal provisions – in
                        particular retention periods.</p>
                    <h3>Request by e-mail, telephone or fax</h3>
                    <p>If you contact us by e-mail, telephone or fax, your request, including all resulting personal
                        data (name, request) will be stored and processed by us for the purpose of processing your
                        request. We do not pass these data on without your consent.</p>
                    <p>The processing of these data is based on Art. 6 para. 1 lit. b GDPR, if your request is related
                        to the execution of a contract or if it is necessary to carry out pre-contractual measures. In
                        all other cases, the processing is based on your consent (Article 6 (1) a GDPR) and/or on our
                        legitimate interests (Article 6 (1) (f) GDPR), since we have a legitimate interest in the
                        effective processing of requests addressed to us.</p>
                    <p>The data sent by you to us via contact requests remain with us until you request us to delete,
                        revoke your consent to the storage or the purpose for the data storage lapses (e.g. after
                        completion of your request). Mandatory statutory provisions - in particular statutory retention
                        periods - remain unaffected.</p>
                    <h3>Registration on this website</h3>
                    <p>You have the option to register on our website to be able to use additional website functions.
                        We shall use the data you enter only for the purpose of using the respective offer or service
                        you have registered for. The required information we request at the time of registration must
                        be entered in full. Otherwise we shall reject the registration.</p>
                    <p>To notify you of any important changes to the scope of our portfolio or in the event of
                        technical modifications, we shall use the e-mail address provided during the registration
                        process.</p>
                    <p>We shall process the data entered during the registration process on the basis of your consent
                        (Art. 6 Sect. 1 lit. a GDPR). You have the right to revoke at any time any consent you have
                        already given us. To do so, all you are required to do is sent us an informal notification via
                        e-mail. This shall be without prejudice to the lawfulness of any data collection that occurred
                        prior to your revocation.</p>
                    <p>The data recorded during the registration process shall be stored by us as long as you are
                        registered on our website. Subsequently, such data shall be deleted. This shall be without
                        prejudice to mandatory statutory retention obligations.</p>
                    <h3>Registration with Facebook Connect</h3>
                    <p>Instead of registering directly on our website, you also have the option to register using
                        Facebook Connect. The provider of this service is Facebook Ireland Limited, 4 Grand Canal
                        Square, Dublin 2, Ireland.</p>
                    <p>If you decide to register via Facebook Connect and click on the “Login with Facebook” / “Connect
                        with Facebook” button, you will be automatically connected to the Facebook platform. There, you
                        can log in using your username and password. As a result, your Facebook profile will be linked
                        to our website or our services. This link gives us access to the data you have archived with
                        Facebook. These data comprise primarily the following:</p>
                    <ul>
                        <li>Facebook name</li>
                        <li>Facebook profile photo and cover photo</li>
                        <li>Facebook cover photo</li>
                        <li>E-mail address archived with Facebook</li>
                        <li>Facebook-ID</li>
                        <li>Facebook friends lists</li>
                        <li>Facebook Likes (“Likes” information)</li>
                        <li>Date of birth</li>
                        <li>Gender</li>
                        <li>Country</li>
                        <li>Language</li>
                    </ul>
                    <p>This information will be used to set up, provide and customise your account.</p>
                    <p>The registration via Facebook Connect and the affiliated data processing transactions are
                        implemented on the basis of your consent (Art. 6 Sect. 1 lit. a GDPR). You may revoke this
                        consent at any time, which shall affect all future transactions thereafter. </p>
                    <p>For more information, please consult the Facebook Terms of Use and the Facebook Data Privacy
                        Policies. Use these links to access this information: <a href="https://www.facebook.com/about/privacy/"
                            target="_blank" rel="noopener">https://www.facebook.com/about/privacy/</a> and <a href="https://www.facebook.com/legal/terms/"
                            target="_blank" rel="noopener">https://www.facebook.com/legal/terms/</a>.</p>
                    <h3>Processing of data (customer and contract data)</h3>
                    <p>We collect, process and use personal data only to the extent necessary for the establishment,
                        content organization or change of the legal relationship (data inventory). These actions are
                        taken on the basis of Art. 6 Sect. 1 lit. b GDPR, which permits the processing of data for the
                        fulfilment of a contract or pre-contractual actions. We collect, process and use personal data
                        concerning the use of our website (usage data) only to the extent that this is necessary to
                        make it possible for users to utilize the services and to bill for them.</p>
                    <p>The collected customer data shall be eradicated upon completion of the order or the termination
                        of the business relationship. This shall be without prejudice to any statutory retention
                        mandates.</p>
                    <h3>Data transfer upon closing of contracts for online stores, retailers and the shipment of
                        merchandise</h3>
                    <p>We share personal data with third parties only if this is necessary in conjunction with the
                        handling of the contract; for instance, with companies entrusted with the shipment of goods or
                        the financial institution tasked with the processing of payments. Any further transfer of data
                        shall not occur or shall only occur if you have expressly consented to the transfer. Any
                        sharing of your data with third parties in the absence of your express consent, for instance
                        for advertising purposes, shall not occur.</p>
                    <p>The basis for the processing of data is Art. 6 Sect. 1 lit. b GDPR, which permits the processing
                        of data for the fulfilment of a contract or for pre-contractual actions.</p>
                    <h3>Data transfer upon closing of contracts for services and digital content</h3>
                    <p>We share personal data with third parties only if this is necessary in conjunction with the
                        handling of the contract; for instance, with the financial institution tasked with the
                        processing of payments.</p>
                    <p>Any further transfer of data shall not occur or shall only occur if you have expressly consented
                        to the transfer. Any sharing of your data with third parties in the absence of your express
                        consent, for instance for advertising purposes, shall not occur.</p>
                    <p>The basis for the processing of data is Art. 6 Sect. 1 lit. b GDPR, which permits the processing
                        of data for the fulfilment of a contract or for pre-contractual actions.</p>
                    <h2>4. Social media</h2>
                    <h3>Social media plug-ins with Shariff</h3>
                    <p>We do use plug-ins of social media networks on our website and its pages (e.g. Facebook,
                        Twitter, Google+, Instagram, Pinterest, XING, LinkedIn, Tumblr).</p>
                    <p>As a rule, you will be able to recognise these plug-ins because of the respective social media
                        logos that appear. To warrant the protection of data on our website, we use these plug-ins only
                        in combination with the so-called “Shariff” solution. This application prevents the plug-ins
                        that have been integrated into our website from transferring data to the respective provider as
                        soon as you enter our website.</p>
                    <p>A direct connection to the provider's server shall not be established until you have activated
                        the respective plug-in by clicking on the affiliated button (which indicates your consent). As
                        soon as you activate the plug-in, the respective provider receives the information that you
                        have visited our website with your IP address. If you are simultaneously logged into your
                        respective social media account (e.g. Facebook), the respective provider will be able to
                        allocate your visit to our website to your user account.</p>
                    <p>The activation of the plug-in constitutes a declaration of consent as defined in Art. 6 Sect. 1
                        lit. a GDPR. You have the option to revoke this consent at any time, which shall affect all
                        future transactions.</p>
                    <h3>Facebook plug-ins (Like & Share button)</h3>
                    <p>We have integrated plug-ins of the social network Facebook, provided by Facebook Inc., 1 Hacker
                        Way, Menlo Park, California 94025, USA, on our website. You will be able to recognise Facebook
                        plug-ins by the Facebook logo or the "Like" button on our website. An overview of the Facebook
                        plug-ins is available under the following link: <a href="https://developers.facebook.com/docs/plugins/"
                            target="_blank" rel="noopener">https://developers.facebook.com/docs/plugins/</a>.</p>
                    <p>Whenever you visit our website and its pages, the plug-in will establish a direct connection
                        between your browser and the Facebook server. As a result, Facebook will receive the
                        information that you have visited our website with your plug-in. However, if you click the
                        Facebook “Like” button while you are logged into your Facebook account, you can link the
                        content of our website and its pages with your Facebook profile. As a result, Facebook will be
                        able to allocate the visit to our website and its pages to your Facebook user account. We have
                        to point out, that we as the provider of the website do not have any knowledge of the
                        transferred data and its use by Facebook. For more detailed information, please consult the
                        Data Privacy Declaration of Facebook at: <a href="https://www.facebook.com/privacy/explanation"
                            target="_blank" rel="noopener">https://www.facebook.com/privacy/explanation</a>.</p>
                    <p>If you do not want Facebook to be able to allocate your visit to our website and its pages to
                        your Facebook user account, please log out of your Facebook account while you are on our
                        website.</p>
                    <p>The use of the Facebook plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the
                        website has a legitimate interest in being as visible as possible on social media.</p>
                    <h3>Twitter plug-in</h3>
                    <p>We have integrated functions of the social media platform Twitter into our website. These
                        functions are provided by Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103,
                        USA. While you use Twitter and the "Re-Tweet" function, websites you visit are linked to your
                        Twitter account and disclosed to other users. During this process, data are transferred to
                        Twitter as well. We must point out, that we, the providers of the website and its pages do not
                        know anything about the content of the data transferred and the use of this information by
                        Twitter. For more details, please consult Twitter’s Data Privacy Declaration at: <a href="https://twitter.com/en/privacy"
                            target="_blank" rel="noopener">https://twitter.com/en/privacy</a>.</p>
                    <p>The use of Twitter plug-ins is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the website
                        has a legitimate interest in being as visible as possible on social media.</p>
                    <p>You have the option to reset your data protection settings on Twitter under the account settings
                        at <a href="https://twitter.com/account/settings" target="_blank" rel="noopener">https://twitter.com/account/settings</a>.</p>
                    <h3>Google+ plug-in</h3>
                    <p>Our website and its pages use functions of Google+; the provider is Google Inc., 1600
                        Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                    <p>Recording and sharing of information: With the assistance of the Google+ button, you can publish
                        information worldwide. The Google+ button provides you and other users with custom tailored
                        Google content as well as content of our partners. Google saves the information you have
                        entered for content with +1 as well as information about the website/page you viewed when you
                        clicked on +1. Your +1 entries may appear as information along with your profile name and your
                        photo on Google services, such as in search results or in your Google profile or in other
                        locations on websites and ads on the Internet.</p>
                    <p>Google records information about your +1 activities to improve Google’s services for you and
                        others. To be able to use the Google+ button, you will need a public Google profile, which is
                        visible around the world, which must contain at least the name you have chosen for your
                        profile. This name is used in conjunction with all Google services. In some cases, this name
                        may also replace another name you have used when sharing content via your Google account. The
                        identity of your Google profile may be displayed to users who know your e-mail address or are
                        in possession of other information related to you that identifies you.</p>
                    <p>Use of the recorded information: Besides the abovementioned purposes of use, the information you
                        provide is also used in compliance with the applicable Google Data Privacy Policies. Google may
                        potentially publish summary statistics about the +1 activities of its users or shares this
                        information with users and partners, such as publishers, prospective customers or affiliated
                        websites.</p>
                    <p>The use of the Google+ plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the
                        website has a legitimate interest in being as visible as possible on social media.</p>
                    <h3>Instagram plug-in</h3>
                    <p>We have integrated functions of the public media platform Instagram into our website. These
                        functions are being offered by Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA.</p>
                    <p>If you are logged into your Instagram account, you may click the Instagram button to link
                        contents from our website to your Instagram profile. This enables Instagram to allocate your
                        visit to our website to your user account. We have to point out that we as the provider of the
                        website and its pages do not have any knowledge of the content of the data transferred and its
                        use by Instagram.</p>
                    <p>The use of the Instagram plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the
                        website has a legitimate interest in being as visible as possible on social media.</p>
                    <p>For more information on this subject, please consult Instagram’s Data Privacy Declaration at: <a
                            href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener">https://instagram.com/about/legal/privacy/</a>.</p>
                    <h3>Tumblr plug-in</h3>
                    <p>Our website and its pages use buttons of the Tumblr platform. The provider is Tumblr, Inc., 35
                        East 21st St, 10th Floor, New York, NY 10010, USA.</p>
                    <p>These buttons enable you to share a report or a page on Tumblr or to follow the provider on
                        Tumblr. If you access one of our websites via the Tumblr button, your browser will establish a
                        direct connection with Tumblr’s servers. We do not have any control over the volume of data
                        Tumblr collects and transfers with the assistance of this plug-in. Based on the current status
                        of the information we have the IP address of the user and the URL of the respective website are
                        both transferred.</p>
                    <p>The use of the Tumblr plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the
                        website has a legitimate interest in being as visible as possible on social media.</p>
                    <p>For further information on this subject, please consult Tumblr’s Data Privacy Declaration at: <a
                            href="https://www.tumblr.com/privacy/de." target="_blank" rel="noopener">https://www.tumblr.com/privacy/de</a>.</p>
                    <h3>LinkedIn plug-in</h3>
                    <p>Our website uses functions of the LinkedIn network. The provider is LinkedIn Corporation, 2029
                        Stierlin Court, Mountain View, CA 94043, USA.</p>
                    <p>Any time you access one of our sites that contains functions of LinkedIn, a connection to
                        LinkedIn’s servers is established. LinkedIn is notified that you have visited our websites with
                        your IP address. If you click on LinkedIn’s "Recommend" button and are logged into your
                        LinkedIn account at the time, LinkedIn will be in a position to allocate your visit to our
                        website to your user account. We have to point out that we as the provider of the websites do
                        not have any knowledge of the content of the transferred data and its use by LinkedIn.</p>
                    <p>The use of the LinkedIn plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the
                        website has a legitimate interest in being as visible as possible on social media.</p>
                    <p>For further information on this subject, please consult LinkedIn’s Data Privacy Declaration at:
                        <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener">https://www.linkedin.com/legal/privacy-policy</a>.</p>
                    <h3>XING plug-in</h3>
                    <p>Our website uses functions of the XING network. The provider is the XING AG, Dammtorstraße
                        29-32, 20354 Hamburg, Germany.</p>
                    <p>Any time one of our sites/pages that contains functions of XING is accessed, a connection with
                        XING’s servers is established. As far as we know, this does not result in the archiving of any
                        personal data. In particular, the service does not store any IP addresses or analyse user
                        patterns.</p>
                    <p>The use of the XING plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the website
                        has a legitimate interest in being as visible as possible on social media.</p>
                    <p>For more information on data protection and the XING share button please consult the Data
                        Protection Declaration of Xing at: <a href="https://www.xing.com/app/share?op=data_protection"
                            target="_blank" rel="noopener">https://www.xing.com/app/share?op=data_protection</a>.</p>
                    <h3>Pinterest plug-in</h3>
                    <p>We use social plug-ins of the social network Pinterest on our website. The network is operated
                        by Pinterest Inc., 808 Brannan Street, San Francisco, CA 94103-490, USA ("Pinterest").</p>
                    <p>If you access a site or page that contains such a plug-in, your browser will establish a direct
                        connection with Pinterest’s servers. During this process, the plug-in transfers log data to
                        Pinterest’s servers in the United States. The log data may possibly include your IP address,
                        the address of the websites you visited, which also contain Pinterest functions. The
                        information also includes the type and settings of your browser, the data and time of the
                        inquiry, how you use Pinterest and cookies.</p>
                    <p>The use of the Pinterest plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the
                        website has a legitimate interest in being as visible as possible on social media.</p>
                    <p>For more information concerning the purpose, scope and continue processing and use of the data
                        by Pinterest as well as your affiliated rights and options to protect your private information,
                        please consult the data privacy information of Pinterest at: <a href="https://about.pinterest.com/de/privacy-policy"
                            target="_blank" rel="noopener">https://about.pinterest.com/en/privacy-policy</a>.</p>
                    <h2>5. Analysis tools and advertising</h2>
                    <h3>Google Analytics</h3>
                    <p>This website uses functions of the web analysis service Google Analytics. The provider of this
                        service is Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                    <p>Google Analytics uses so-called cookies. Cookies are text files, which are stored on your
                        computer and that enable an analysis of the use of the website by users. The information
                        generated by cookies on your use of this website is usually transferred to a Google server in
                        the United States, where it is stored.</p>
                    <p>The storage of Google Analytics cookies and the utilization of this analysis tool are based on
                        Art. 6 Sect. 1 lit. f GDPR. The operator of this website has a legitimate interest in the
                        analysis of user patterns to optimize both, the services offered online and the operator’s
                        advertising activities.</p>
                    <p><strong>IP anonymization</strong></p>
                    <p>On this website, we have activated the IP anonymization function. As a result, your IP address
                        will be abbreviated by Google within the member states of the European Union or in other states
                        that have ratified the Convention on the European Economic Area prior to its transmission to
                        the United States. The full IP address will be transmitted to one of Google’s servers in the
                        United States and abbreviated there only in exceptional cases. On behalf of the operator of
                        this website, Google shall use this information to analyse your use of this website to generate
                        reports on website activities and to render other services to the operator of this website that
                        are related to the use of the website and the Internet. The IP address transmitted in
                        conjunction with Google Analytics from your browser shall not be merged with other data in
                        Google’s possession.</p>
                    <p><strong>Browser plug-in</strong></p>
                    <p>You do have the option to prevent the archiving of cookies by making pertinent changes to the
                        settings of your browser software. However, we have to point out that in this case you may not
                        be able to use all of the functions of this website to their fullest extent. Moreover, you have
                        the option prevent the recording of the data generated by the cookie and affiliated with your
                        use of the website (including your IP address) by Google as well as the processing of this data
                        by Google by downloading and installing the browser plug-in available under the following link:
                        <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout?hl=en</a>.</p>
                    <p><strong>Objection to the recording of data</strong></p>
                    <p>You have the option to prevent the recording of your data by Google Analytics by clicking on the
                        following link. This will result in the placement of an opt out cookie, which prevents the
                        recording of your data during future visits to this website: <a href="javascript:gaOptout();">Google
                            Analytics deactivation</a>.</p>
                    <p>For more information about the handling of user data by Google Analytics, please consult
                        Google’s Data Privacy Declaration at: <a href="https://support.google.com/analytics/answer/6004245?hl=de"
                            target="_blank" rel="noopener">https://support.google.com/analytics/answer/6004245?hl=en</a>.</p>
                    <p><strong>Contract data processing</strong></p>
                    <p>We have executed a contract data processing agreement with Google and are implementing the
                        stringent provisions of the German data protection agencies to the fullest when using Google
                        Analytics.</p>
                    <p><strong>Demographic parameters provided by Google Analytics</strong></p>
                    <p>This website uses the function “demographic parameters” provided by Google Analytics. It makes
                        it possible to generate reports providing information on the age, gender and interests of
                        website visitors. The sources of this information are interest-related advertising by Google as
                        well as visitor data obtained from third party providers. This data cannot be allocated to a
                        specific individual. You have the option to deactivate this function at any time by making
                        pertinent settings changes for advertising in your Google account or you can generally prohibit
                        the recording of your data by Google Analytics as explained in section “Objection to the
                        recording of data.”</p>

                    <h3>Google AdSense</h3>
                    <p>This website uses Google AdSense, a service for the integration of ads offered by Google Inc.
                        ("Google"). The provider of this service is Google Inc., 1600 Amphitheatre Parkway, Mountain
                        View, CA 94043, USA.</p>
                    <p>Google AdSense uses so-called "cookies"; i.e. text files that are stored on your computer and
                        that make it possible to analyse your use of this website. Google AdSense also uses so-called
                        Web Beacons (invisible graphics). These Web Beacons can be used to analyse information, such as
                        visitor traffic data, on this website.</p>
                    <p>The information generated by the cookies and the Web Beacons concerning the use of this website
                        (including your IP address) and the delivery of advertising formats are transferred to a Google
                        server in the United States, where they are archived. Google may share this information with
                        Google contracting partners. Google shall, however, not merge your IP address with any other of
                        your data stored by Google.</p>
                    <p>The storage of the AdSense cookies is based on Art. 6 Sect. 1 lit. f GDPR. The website operator
                        has a legitimate interest in the analysis of user patterns, in order to optimize the operator’s
                        web offerings and advertising.</p>
                    <p>You can prevent the installation of these cookies by making a pertinent adjustment to your
                        browser software settings; however, we have to point out that in this case you may not be able
                        to use all of the functions of this website to their fullest extent. By using this website, you
                        declare your consent to the processing of the data we collect about you by Google in the manner
                        described above and agree to the aforementioned purpose of use.</p>
                    <h3>Google Analytics Remarketing</h3>
                    <p>Our websites use the functions of Google Analytics Remarketing in combination with the functions
                        of Google AdWords and Google DoubleClick, which work on all devices. The provider of these
                        solutions is Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                    <p>This function makes it possible to connect the advertising target groups generated with Google
                        Analytics Remarketing with the functions of Google AdWords and Google DoubleClick, which work
                        on all devices. This makes it possible to display interest-based customized advertising
                        messages, depending on your prior usage and browsing patterns on a device (e.g. cell phone) in
                        a manner tailored to you as well as on any of your devices (e.g. tablet or PC).</p>
                    <p>If you have given us pertinent consent, Google will connect your web and app browser
                        progressions with your Google account for this purpose. As a result, it is possible to display
                        the same personalized advertising messages on every device you log into with your Google
                        account.</p>
                    <p>To support this function, Google Analytics records Google authenticated IDs of users that are
                        temporarily connected with our Google Analytics data to define and compile the target groups
                        for the ads to be displayed on all devices.</p>
                    <p>You have the option to permanently object to remarketing / targeting across all devices by
                        deactivating personalized advertising in your Google account. To do this, please follow this
                        link: <a href="https://www.google.com/settings/ads/onweb/" target="_blank" rel="noopener">https://www.google.com/settings/ads/onweb/</a>.</p>
                    <p>The consolidation of the recorded data in your Google account shall occur exclusively based on
                        your consent, which you may give to Google and also revoke there (Art. 6 Sect. 1 lit. a GDPR).
                        Data recording processes that are not consolidated in your Google account (for instance because
                        you do not have a Google account or have objected to the consolidation of data), the recording
                        of data is based on Art. 6 Sect. 1 lit. f GDPR. The legitimate interest arises from the fact
                        that the operator of the website has a legitimate interest in the anonymized analysis of
                        website visitor for advertising purposes.</p>
                    <p>For further information and the pertinent data protection regulations, please consult the Data
                        Privacy Policies of Google at: <a href="https://policies.google.com/technologies/ads?hl=en"
                            target="_blank" rel="noopener">https://policies.google.com/technologies/ads?hl=en</a>.</p>
                    <h3>Google AdWords and Google Conversion Tracking</h3>
                    <p>This website uses Google AdWords. AdWords is an online promotional program of Google Inc., 1600
                        Amphitheatre Parkway, Mountain View, CA 94043, United States (“Google”).</p>
                    <p>In conjunction with Google AdWords, we use a tool called Conversion Tracking. If you click on an
                        ad posted by Google, a cookie for Conversion Tracking purposes will be placed. Cookies are
                        small text files the web browser places on the user’s computer. These cookies expire after 30
                        days and are not used to personally identify users. If the user visits certain pages of this
                        website and the cookie has not yet expired, Google and we will be able to recognise that the
                        user has clicked on an ad and has been linked to this page.</p>
                    <p>A different cookie is allocated to every Google AdWords customer. These cookies cannot be
                        tracked via websites of AdWords customers. The information obtained with the assistance of the
                        Conversion cookie is used to generate Conversion statistics for AdWords customers who have
                        opted to use Conversion Tracking. The users receive the total number of users that have clicked
                        on their ads and have been linked to a page equipped with a Conversion Tracking tag. However,
                        they do not receive any information that would allow them to personally identify these users.
                        If you do not want to participate in tracking, you have the option to object to this use by
                        easily deactivating the Google Conversion Tracking cookie via your web browser under user
                        settings. If you do this, you will not be included in the Conversion Tracking statistics.</p>
                    <p>The storage of “Conversion” cookies and the use of this tracking tool are based on Art. 6 Sect.
                        1 lit. f GDPR. The website operator has a legitimate interest in the analysis of user patterns,
                        in order to optimize the operator’s web offerings and advertising.</p>
                    <p>To review more detailed information about Google AdWords and Google Conversion Tracking, please
                        consult the Data Privacy Policies of Google at: <a href="https://policies.google.com/privacy?hl=en"
                            target="_blank" rel="noopener">https://policies.google.com/privacy?hl=en</a>.</p>
                    <p>You can set up your browser in such a manner that you will be notified anytime cookies are
                        placed and you can permit cookies only in certain cases or exclude the acceptance of cookies in
                        certain instances or in general and you can also activate the automatic deletion of cookies
                        upon closing of the browser. If you deactivate cookies, the functions of this website may be
                        limited.</p>
                    <h3>Facebook Pixel</h3>
                    <p>To measure our conversion rates, our website uses the visitor activity pixel of Facebook,
                        Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA (“Facebook”).</p>
                    <p>This tool allows the tracking of page visitors after they have been linked to the website of the
                        provider after clicking on a Facebook ad. This makes it possible to analyse the effectiveness
                        of Facebook ads for statistical and market research purposes and to optimize future advertising
                        campaigns.</p>
                    <p>For us as the operators of this website, the collected data is anonymous. We are not in a
                        position to arrive at any conclusions as to the identity of users. However, Facebook archives
                        the information and processes it, so that it is possible to make a connection to the respective
                        user profile and Facebook is in a position to use the data for its own promotional purposes in
                        compliance with the <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener">Facebook
                            Data Usage Policy</a>. This enables Facebook to display ads on Facebook pages as well as in
                        locations outside of Facebook. We as the operator of this website have no control over the use
                        of such data.</p>
                    <p>The use of Facebook Pixel is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the website
                        has a legitimate interest in effective advertising campaigns, which also include social media.</p>
                    <p>In Facebook’s Data Privacy Policies, you will find additional information about the protection
                        of your privacy at: <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener">https://www.facebook.com/about/privacy/</a>.</p>
                    <p>You also have the option to deactivate the remarketing function “Custom Audiences” in the ad
                        settings section under <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
                            target="_blank" rel="noopener">https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen</a>.
                        To do this, you first have to log into Facebook.</p>
                    <p>If you do not have a Facebook account, you can deactivate any user based advertising by Facebook
                        on the website of the European Interactive Digital Advertising Alliance: <a href="http://www.youronlinechoices.com/de/praferenzmanagement/"
                            target="_blank" rel="noopener">http://www.youronlinechoices.com/de/praferenzmanagement/</a>.</p>
                    <h2>6. Newsletter</h2>
                    <h3>Newsletter data</h3>
                    <p>If you would like to subscribe to the newsletter offered on this website, we will need from you
                        an e-mail address as well as information that allow us to verify that you are the owner of the
                        e-mail address provided and consent to the receipt of the newsletter. No further data shall be
                        collected or shall be collected only on a voluntary basis. We shall use such data only for the
                        sending of the requested information and shall not share such data with any third parties.</p>
                    <p>The processing of the information entered into the newsletter subscription form shall occur
                        exclusively on the basis of your consent (Art. 6 Sect. 1 lit. a GDPR). You may revoke the
                        consent you have given to the archiving of data, the e-mail address and the use of this
                        information for the sending of the newsletter at any time, for instance by clicking on the
                        "Unsubscribe" link in the newsletter. This shall be without prejudice to the lawfulness of any
                        data processing transactions that have taken place to date.</p>
                    <p>The data you archive with us for the purpose of the newsletter subscription shall be archived by
                        us until you unsubscribe from the newsletter. Once you cancel your subscription to the
                        newsletter, the data shall be deleted. This shall not affect data we have been archiving for
                        other purposes.</p>
                    <h3>MailChimp</h3>
                    <p>This website uses the services of MailChimp to send out its newsletters. The provider is the
                        Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.</p>
                    <p>Among other things, MailChimp is a service that can be deployed to organise and analyse the
                        sending of newsletters. Whenever you enter data for the purpose of subscribing to a newsletter
                        (e.g. your e-mail address), the information is stored on MailChimp servers in the United
                        States.</p>
                    <p>MailChimp is in possession of a certification that is in compliance with the
                        “EU-US-Privacy-Shield.” The “Privacy-Shield” is a compact between the European Union (EU) and
                        the United States of America (USA) that aims to warrant the compliance with European data
                        protection standards in the United States.</p>
                    <p>With the assistance of the MailChimp tool, we can analyse the performance of our newsletter
                        campaigns. If you open an e-mail that has been sent through the MailChimp tool, a file that has
                        been integrated into the e-mail (a so-called web-beacon) connects to MailChimp’s servers in the
                        United States. As a result, it can be determined whether a newsletter message has been opened
                        and which links the recipient possibly clicked on. Technical information is also recorded at
                        that time (e.g. the time of access, the IP address, type of browser and operating system). This
                        information cannot be allocated to the respective newsletter recipient. Their sole purpose is
                        the performance of statistical analyses of newsletter campaigns. The results of such analyses
                        can be used to tailor future newsletters to the interests of their recipients more effectively.</p>
                    <p>If you do not want to permit an analysis by MailChimp, you must unsubscribe from the newsletter.
                        We provide a link for you to do this in every newsletter message. Moreover, you can also
                        unsubscribe from the newsletter right on the website.</p>
                    <p>The data is processed based on your consent (Art. 6 Sect. 1 lit. a GDPR). You may revoke any
                        consent you have given at any time by unsubscribing from the newsletter. This shall be without
                        prejudice to the lawfulness of any data processing transactions that have taken place prior to
                        your revocation.</p>
                    <p>The data you archive with us for the purpose of the newsletter subscription shall be archived by
                        us until you unsubscribe from the newsletter. Once you cancel your subscription to the
                        newsletter, the data shall be deleted from our servers as well as those of MailChimp. This
                        shall not affect data we have been archiving for other purposes.</p>
                    <p>For more details, please consult the Data Privacy Policies of MailChimp at: <a href="https://mailchimp.com/legal/terms/"
                            target="_blank" rel="noopener">https://mailchimp.com/legal/terms/</a>.</p>
                    <h2>7. Plug-ins and Tools</h2>
                    <h3>YouTube</h3>
                    <p>Our website uses plug-ins of the YouTube platform, which is operated by Google. The website
                        operator is YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>
                    <p>If you visit a page on our website into which a YouTube plug-in has been integrated, a
                        connection with YouTube’s servers will be established. As a result, the YouTube server will be
                        notified, which of our pages you have visited.</p>
                    <p>Furthermore, YouTube will be able to place various cookies on your device. With the assistance
                        of these cookies, YouTube will be able to obtain information about our website visitor. Among
                        other things, this information will be used to generate video statistics with the aim of
                        improving the user friendliness of the site and to prevent attempts to commit fraud. These
                        cookies will stay on your device until you delete them.</p>
                    <p>If you are logged into your YouTube account while you visit our site, you enable YouTube to
                        directly allocate your browsing patterns to your personal profile. You have the option to
                        prevent this by logging out of your YouTube account.</p>
                    <p>The use of YouTube is based on our interest in presenting our online content in an appealing
                        manner. Pursuant to Art. 6 Sect. 1 lit. f GDPR, this is a legitimate interest.</p>
                    <p>For more information on how YouTube handles user data, please consult the YouTube Data Privacy
                        Policy under: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener">https://policies.google.com/privacy?hl=en</a>.</p>
                    <h3>Google Web Fonts (local embedding)</h3>
                    <p>This website uses so-called Web Fonts provided by Google to ensure the uniform use of fonts on
                        this site. These Google fonts are locally installed so that a connection to Google’s servers
                        will not be established in conjunction with this application.</p>
                    <h3>Google Maps</h3>
                    <p>Via an API, this website uses the mapping service Google Maps. The provider is Google Inc., 1600
                        Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                    <p>To enable the use of the Google Maps features, your IP address must be stored. As a rule, this
                        information is transferred to one of Google’s servers in the United States, where it is
                        archived. The operator of this website has no control over the data transfer.</p>
                    <p>We use Google Maps to present our online content in an appealing manner and to make the
                        locations disclosed on our website easy to find. This constitutes a legitimate interest as
                        defined in Art. 6 Sect. 1 lit. f GDPR.</p>
                    <p>For more information on the handling of user data, please review Google’s Data Privacy
                        Declaration under: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener">https://policies.google.com/privacy?hl=en</a>.</p>
                    <h3>Google reCAPTCHA</h3>
                    <p>We use “Google reCAPTCHA” (hereinafter referred to as “reCAPTCHA”) on our websites. The provider
                        is Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (“Google”).</p>
                    <p>The purpose of reCAPTCHA is to determine whether data entered on our websites (e.g. information
                        entered into a contact form) is being provided by a human user or by an automated program. To
                        determine this, reCAPTCHA analyses the behaviour of the website visitors based on a variety of
                        parameters. This analysis is triggered automatically as soon as the website visitor enters the
                        site. For this analysis, reCAPTCHA evaluates a variety of data (e.g. IP address, time the
                        website visitor spent on the site or cursor movements initiated by the user). The data tracked
                        during such analyses are forwarded to Google.</p>
                    <p>reCAPTCHA analyses run entirely in the background. Website visitors are not alerted that an
                        analysis is underway.</p>
                    <p>The data is processed on the basis of Art. 6 Sect. 1 lit. f GDPR. It is in the website operators
                        legitimate interest, to protect the operator’s web content against misuse by automated
                        industrial espionage systems and against SPAM.</p>
                    <p>For more information about Google reCAPTCHA and to review the Data Privacy Declaration of
                        Google, please follow these links: <a href="https://policies.google.com/privacy?hl=en" target="_blank"
                            rel="noopener">https://policies.google.com/privacy?hl=en</a> and <a href="https://www.google.com/recaptcha/intro/android.html"
                            target="_blank" rel="noopener">https://www.google.com/recaptcha/intro/android.html</a>.</p>
                    <h3>SoundCloud</h3>
                    <p>We may have integrated plug-ins of the social network SoundCloud (SoundCloud Limited, Berners
                        House, 47-48 Berners Street, London W1T 3NF, Great Britain) into our websites. You will be able
                        to recognise such SoundCloud plug-ins by checking for the SoundCloud logo on the respective
                        pages.</p>
                    <p>Whenever you visit one of our websites, a direct connection between your browser and the
                        SoundCloud server will be established immediately after the plug-in has been activated. As a
                        result, SoundCloud will be notified that you have used your IP address to visit our site. If
                        you click the “Like” button or the “Share” button while you are logged into your Sound Cloud
                        user account, you can link the content of our websites to your SoundCloud profile and/or share
                        the content. Consequently, SoundCloud will be able to allocate the visit to our website to your
                        user account. We emphasize that we as the provider of the websites do not have any knowledge of
                        the data transferred and the use of this data by SoundCloud.</p>
                    <p>We use SoundCloud on the basis of Art. 6 Sect. 1 lit. f GDPR. The website operator has a
                        legitimate interest in attaining the highest level of visibility on social media.</p>
                    <p>For more information about this, please consult SoundCloud’s Data Privacy Declaration at: <a
                            href="https://soundcloud.com/pages/privacy" target="_blank" rel="noopener">https://soundcloud.com/pages/privacy</a>.</p>
                    <p>If you prefer not to have your visit to our websites allocated to your SoundCloud user account
                        by SoundCloud, please log out of your SoundCloud user account before you activate content of
                        the SoundCloud plug-in.</p>
                    <h3>Spotify</h3>
                    <p>We have integrated features of the Spotify music platform into our websites. The provider is
                        Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm, Sweden. You will be able to recognise
                        Spotify plug-ins when you see the green logo on our pages. An overview of Spotify’s plug-ins
                        can be found at: <a href="https://developer.spotify.com" target="_blank" rel="noopener">https://developer.spotify.com</a>.</p>
                    <p>The plug-in makes it possible to establish a direct connection between your browser and
                        Spotify’s server when you visit our websites. As a result, Spotify receives the information
                        that you visited our site with your IP address. If you click the Spotify button while you are
                        logged into your Spotify account, you have the option to link content from our page with your
                        Spotify profile. Consequently, Spotify will be in a position to allocate your visit to our
                        websites to your user account.</p>
                    <p>The data processing activities are based on Art. 6 Sect. 1 lit. f GDPR. Accordingly, the website
                        operator has a legitimate interest in placing respective acoustic content on the operator’s
                        website.</p>
                    <p>For more information, please consult Spotify’s Data Protection Declaration under: <a href="https://www.spotify.com/us/legal/privacy-policy/"
                            target="_blank" rel="noopener">https://www.spotify.com/us/legal/privacy-policy/</a>.</p>
                    <p>If you do not want Spotify to be able to allocate the visit of our websites to your Spotify user
                        account, please log out of your Spotify user account while visiting our sites.</p>
                    <h2>8. Payment service providers and resellers</h2>
                    <h3>PayPal</h3>
                    <p>Among other options, we offer payment via PayPal on our website. The provider of this payment
                        processing service is PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
                        Luxembourg (hereinafter referred to as “PayPal”).</p>
                    <p>If you choose payment via PayPal, we will share the payment information you enter with PayPal.</p>
                    <p>The legal basis for the sharing of your data with PayPal is Art. 6 Sect. 1 lit. a GDPR (consent)
                        as well as Art. 6 Sect. 1 lit. b GDPR (processing for the fulfilment of a contract). You have
                        the option to at any time revoke your consent to the processing of your data. Such a revocation
                        shall not have any impact on the effectiveness of data processing transactions that occurred in
                        the past.</p>
                    <h3>instant transfer Sofort</h3>
                    <p>Among other options, we offer the payment service called “instant transfer Sofort” on our
                        website. The provider of this payment option is the Sofort GmbH, Theresienhöhe 12, 80339
                        München, Germany (hereinafter referred to as “Sofort GmbH”).</p>
                    <p>With the assistance of the “instant transfer Sofort” tool, we receive a payment confirmation
                        from the Sofort GmbH in real time, which allows us to instantly start to fulfil our obligations
                        to you.</p>
                    <p>When you choose the “instant transfer Sofort” payment option, you must send a PIN and a valid
                        TAN to the Sofort GmbH, which allows the company to log into your online banking account. Upon
                        logging in, the Sofort GmbH will verify your account balance and will execute the bank transfer
                        to us with the assistance of the TAN you provided. Subsequently, the company sends us an
                        immediate transaction confirmation. After Sofort GmbH has logged in, the system will also
                        automatically verify your revenues and check the credit limit of your pre-approved overdraft
                        credit line and the existence of other accounts along with their balances.</p>
                    <p>Along with the PIN and TAN numbers, the system also transfers the payment information you
                        entered along with personal data to the Sofort GmbH. Your personal data comprise your first and
                        last name, address, phone number(s), e-mail address, IP address as well as any other data
                        required for the processing of the payment transaction. This data must be transferred in order
                        to be able to determine your identity with absolute certainty and to prevent attempts to commit
                        fraud.</p>
                    <p>The legal basis for the sharing of your information with the Sofort GmbH is Art. 6 Sect. 1 lit.
                        a GDPR (consent) as well as Art. 6 Sect. 1 lit. b GDPR (processing for fulfilment of a
                        contract). You have the option to at any time revoke your consent to the processing of your
                        data. Such a revocation shall not have any impact on the effectiveness of data processing
                        transactions that occurred in the past.</p>
                    <p>For details on payments made with the instant transfer option, please follow these links: <a
                            href="https://www.sofort.de/datenschutz.html" target="_blank" rel="noopener">https://www.sofort.de/datenschutz.html</a>
                        and <a href="https://www.klarna.com/sofort/" target="_blank" rel="noopener">https://www.klarna.com/sofort/</a>.</p>
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Fragment>
    )
}

export default PrivacyPage;