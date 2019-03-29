import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Documentation from './documentation.md';
import Guidelines from './GUIDELINES.md';

import {
  Button,
  OutlineButton,
  TextButton,
  MetaMaskButton,
  Icon,
  Loader,
  Text,
  Heading,
  Box,
  Flex,
  Modal,
  Card,
  Pill
} from 'rimble-ui';

storiesOf('Buttons/Button', module)
  .add(
    'Documentation',
    withDocs(Documentation, () => (
      <Box textAlign={'left'}>
        <Box>
          <Heading.h2>Button examples</Heading.h2>
          <Text>Different ways to use the button component</Text>
          <br />
        </Box>
        <Box>
          <Heading.h4>Default button</Heading.h4>
          <Text.p>
            Use to show users the primary action(s) they can take from the
            screen they're on.
          </Text.p>
          <Button mb={3}>Connect wallet</Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button>Connect wallet</Button>'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Different sizes</Heading.h4>
          <Button size="small" mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button size="small">Connect wallet</Button>'}</code>
          </Box>
          <br />
          <Button size="medium" mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button size="medium">Connect wallet</Button>'}</code>
          </Box>
          <br />
          <Button size="large" mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button size="large">Connect wallet</Button>'}</code>
          </Box>
          <br />
          <Heading.h4>Full-width button</Heading.h4>
          <Button fullWidth mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button fullWidth>Connect wallet</Button>'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Disabled button</Heading.h4>
          <Text.p>
            Use to indicate to the user that they need to do something before they can
            perform the action.
          </Text.p>
          <Button disabled mb={3}>
            Connect wallet
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button disabled>Connect wallet</Button>'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Icon</Heading.h4>
          <Text.p>
            Use to add visual reinforcement to an action. In most cases an icon
            should support button copy and not replace. Copy is less ambiguous
            than an icon.
          </Text.p>
          <Button icon="Send" mb="3">
            Send Ether
          </Button>
          <br />
          <Button icon="Send" iconpos="right" mb="3">
            Send Ether
          </Button>
          <br />
          <Button icon="MoreHoriz" icononly mb="3" mr={2} />
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button icon="Send">Send Ether</Button>'}</code>
          </Box>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>
              {'<Button icon="Check" iconpos="right">Send Ether</Button>'}
            </code>
          </Box>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button icon="MoreHoriz" icononly mb="3" mr={2} />'}</code>
          </Box>
        </Box>
        <br />
        <Box>
          <Heading.h4>Loading button</Heading.h4>
          <Text.p>
            Use to give users reassurance that the action they want is
            happening. If possible, include copy that further explains what's
            happening like "Loading" or "Sending"
          </Text.p>
          <Button mb={3}>
            <Loader color="white" />
          </Button>
          <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
            <code>{'<Button><loader color="white" /></Button>'}</code>
          </Box>
        </Box>
      </Box>
    ))
  )
storiesOf('Buttons', module)
  .add(
    'Design guidelines',
    withDocs(Guidelines, () => (
    <Box textAlign={'left'}>
    <Box>
      <Heading.h2>Design</Heading.h2>
      <Text>Some best practices for using <code>{'Button'}</code> in your product.</Text>
    </Box>
    <Box>
    <ul>
    <li><Text>Don't just use icons</Text></li>
    <li>
    <Text>Don’t use buttons for navigational links, they're for action-based tasks. Use <a href="https://consensys.github.io/rimble-ui/?path=/story/button--textbutton"><code>{'textButton'}</code></a> instead</Text></li></ul>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Keep button position consistent so that users know where to look when they want to perform actions</Text></li>
    </ul>
    </Box>
    <Box>
    <ul>
    <li>
    <Text>Don’t use too many buttons together on one piece of interface: prioritise the most important action. Use <a href="https://consensys.github.io/rimble-ui/?path=/story/button--textbutton"><code>{'textButton'}</code></a> and <a href="https://consensys.github.io/rimble-ui/?path=/story/button--outlinebutton"><code>{'outlineButton'}</code></a> to give your actions visual hierarchy</Text></li></ul>
    </Box>
    <Card width={'600px'} px={4}>
  <Heading>Lesson #1: What's Gas?</Heading>
  <Text mb={4}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem ratione doloribus quidem neque provident eius error dignissimos delectus architecto nemo quos alias sunt voluptate impedit, facilis sequi tempore. Amet!
  </Text>
  <Flex>
  <Box width={1/2}>
  <TextButton>Cancel</TextButton>
  </Box>
  <Box width={1/2}>
  <OutlineButton mr={3} disabled>Previous</OutlineButton>
  <Button mr={3}>Next</Button>
  </Box>
  </Flex>

</Card>
    <Box>
    <ul>
    <li><Text>If a user needs to do something prior to performing an action, it’s better to set the Disabled prop to True than to use this component and follow it up with an error message</Text></li></ul>
    </Box>
    <br /><br />
      <Box>
        <Heading.h2>Content</Heading.h2>
        <Text>Some best practices for writing <code>{'Button'}</code> microcopy.</Text>
      </Box>
      <Box>
        <Heading.h4>Keep copy concise</Heading.h4>
        <Text>Don’t use articles (a, the, an) in button microcopy. This will make your button quicker to scan and shorter.</Text>
      </Box>
      <br />
      <Flex>
      <Card mx={'auto'} my={3} px={4} width="400px">
        <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
          <Button my={3} size="medium">Add wallet</Button>
        </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
          <Button my={3} size="medium">Add a wallet</Button>
        </Card>
      </Flex>
      <br />
      <Box>
        <Heading.h4>Explain the next step, not the end goal</Heading.h4>
        <Text>The user should understand exactly what will happen once they press the button.</Text><br />
        <Text>For example, if you have a button that launches a QR code for you to scan with your mobile...</Text>
      </Box>
      <br />
      <Flex>
      <Card mx={'auto'} my={3} px={4} width="400px">
        <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
          <Button my={3} size="medium">Show QR code</Button>
        </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
          <Button my={3} size="medium">Scan QR code</Button>
        </Card>
        <br />
      </Flex>
      <br />
      <Box>
        <Heading.h4>Lead with a verb</Heading.h4>
        <Text>And follow with a noun. Don’t rely on the rest of the interface to inform the user about what their action relates to.</Text>
      </Box>
      <br />
      <Flex>
      <Card mx={'auto'} my={3} px={4} width="400px">
        <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
          <Button size="medium">Add wallet</Button><br /><br  />
          <Button size="medium">Send Ether</Button>
        </Card>
        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
          <Button icon="AddCircle">Add</Button><br /><br />
          <Button icon="Send" mb="3">Send</Button>
        </Card>
      </Flex><br />
      <Box>
      <Text>Universally understood actions like "Save", "Next" and "Previous" etc may not need the noun.</Text>
      </Box><br /><br />
      <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text><br />
      <Card color="white" bg="primary">
      <Heading.h2  color="white">Are we missing anything?</Heading.h2>
      <Text color="white">If you have any extra insight you'd like to add, please raise an issue in Github.</Text><br />
      <OutlineButton Large>Raise issue</OutlineButton><br /><br />
      </Card><br />
      </Box>
    ))
  );
