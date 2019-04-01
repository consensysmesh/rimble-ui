import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';
import Guidelines from './GUIDELINES.md';

import { Radio, Field, Input, Box, Card, Heading, Text, Checkbox, Flex, Pill, Select, OutlineButton } from 'rimble-ui'

storiesOf('Form/Radio buttons', module)
  .addDecorator(withDocs(MyREADME))
  .add('Documentation', () => (
    <Box mx={3} textAlign={'left'}>
    <Field label='Choose transaction speed'>
      <Radio label="Quick" my={2} required='false'/>
      <Radio checked label="Standard" my={2} required='false'/>
      <Radio disabled label="Slower" my={2} required='false'/>
      <Radio disabled checked label="Custom" my={2} required='false'/>
    </Field>
    <Box bg={'#f7f7f7'} my={2} p={2} radius={3}>
      <code>{'<Radio label="Quick" />'}</code><br />
      <code>{'<Radio checked label="Standard" />'}</code><br />
      <code>{'<Radio disabled label="Slower" />'}</code><br />
      <code>{'<Radio disabled checked label="Custom" />'}</code>
    </Box>
    </Box>
  ))
  .add('Design guidelines',
    withDocs(Guidelines, () => (
      <Box mx={3} textAlign={'left'}>
      <Box>
      <Heading.h2>Design</Heading.h2>
      <Text>Some best practices for using <code>{'Radio'}</code> in your product.</Text>
      </Box>

      <Box>
      <Heading.h4>Always use with a label</Heading.h4>
      <Text>Your users will need instruction on what to choose. Don't just provide them with their choices.</Text><br />
      </Box>

      <Flex>
      <Card mx={'auto'} my={3} px={4} width="400px">
        <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
        <Field label="Would you like alerts when the price changes?">
        <Radio label="Yes" required="true" my={2} />
        <Radio label="No" required="true" my={2} />
        </Field>
        </Card>

        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />

          <Radio label="Yes" required="true" my={2} />
          <Radio label="No" required="true" my={2} />
        </Card>
      </Flex><br />

      <Box>
      <Heading.h4>Only use for binary decisions</Heading.h4>
      <Text>Radio buttons are for times when your users can choose only one option.</Text><br />
      </Box>
      <Flex>
      <Card mx={'auto'} my={3} px={4} width="400px">
        <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
        <Field label="Would you like alerts when the price changes?">
        <Radio label="Yes" required="true" my={2} />
        <Radio label="No" required="true" my={2} />


        </Field>
        </Card>

        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
       <Field label="Choose any currencies you'd like to track">
       <Radio label="Ether (ETH)" required="true" my={2} />
       <Radio label="Bitcoin (BTC)" required="true" my={2} />
       <Radio label="Ethereum Classic (ETC)" required="true" my={2} />
       <Radio label="Litecoin (LTC)" required="true" my={2} />
        </Field>
        </Card>
      </Flex>
      <Box>
      <Heading.h4>Only use for small groups of options</Heading.h4>
      <Text>If the user can choose from lots of options, like currencies or states, use a <a href="/story/form-select--documentation"><code>{'Select'}</code></a> component instead.</Text><br />
      </Box>
      <Flex>
      <Card mx={'auto'} my={3} px={4} width="400px">
        <Pill mb={3} color={"green"}>{"Do"}</Pill><br /><br />
        <Field label="Choose your default currency">
        <Select items={["ETH - Ether","BTC - Bitcoin","GNO - Gnosis","GNT - Golem","REP - Augur", "XRP - Ripple","USD - Dollars","GBP - Pounds", "YEN", "INR - Rupees" ]} /><br /><br />
        </Field>
        </Card>

        <Card mx={'auto'} my={3} px={4} width="400px">
          <Pill mb={3} color={"red"}>{"Don't"}</Pill><br /><br />
       <Field required="true" label="Choose your default currency">
          <Radio label="ETH - Ether" required="true" my={2} />
          <Radio label="BTC - Bitcoin" required="true" my={2} />
          <Radio label="USD - Dollars" required="true" my={2} />
          <Radio label="GBP - Pounds" required="true" my={2} />
          <Radio label="XRP - Ripple" required="true" my={2} />
          <Radio label="GNO - Gnosis" required="true" my={2} />
          <Radio label="GNT - Golem" required="true" my={2} />
          <Radio label="REP - Augur" required="true" my={2} />
          <Radio label="YEN" required="true" my={2} />
          <Radio label="INR - Rupee" required="true" my={2} />
        </Field>
        </Card>
      </Flex>
      <br /><br />
      <Text textAlign={'center'}>(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text><br />
      <Card color="white" bg="primary">
      <Heading.h2  color="white">Are we missing anything?</Heading.h2>
      <Text color="white">If you have any extra insight you'd like to add, please raise an issue in Github.</Text><br />
      <OutlineButton Large>Raise issue</OutlineButton><br /><br />
      </Card><br />
</Box>
    )));
