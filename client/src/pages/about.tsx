import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Auth-About" description="Auth-About" />}>
    <p>
      You can use MetaMask to interact with blockchain applications such as
      dApps and DeFi apps. MetaMask also functions as an authentication module,
      connecting you to your account and data as a user.
    </p>
    <p>
      Our platform allows users to connect to any app using metamask, users can
      use metamaskAuth to authenticate to various centralised applications using
      their metamask accounts. This is the first step in bridging the gap
      between centralisation and decentralisation.
    </p>
  </Main>
);

export default About;
