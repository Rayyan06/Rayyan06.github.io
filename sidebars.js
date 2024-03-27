/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  avrSidebar: [
    'avr-programming/introduction',
    'avr-programming/overview',
    /*
    {
      type: 'category',
      label: 'Hardware',
      link: {
        type: 'generated-index',
        title: 'Hardware',
        description:
          'An Overview of all the different things that go into the hardware of the AVR microcontroller!',
        slug: '/hardware',
        keywords: ['hardware'],
      },
      collapsed: true,
      items: [
        'avr-programming/hardware/core',
        'avr-programming/hardware/clocks',
        'avr-programming/hardware/outputs',
        'avr-programming/hardware/inputs',
        'avr-programming/hardware/serial-communications',
        'avr-programming/hardware/analog-to-digital-converter',
        'avr-programming/hardware/timers-counters',
      ],
    },
    */
    {
      type: 'category',
      label: 'Toolchain',
      link: {
        type: 'generated-index',
        title: 'Toolchain',
        description: 'TThe Toolchain',
        slug: '/toolchain',
        keywords: ['toolchain', 'code'],
      },
      collapsed: true,
      items: ['avr-programming/toolchain/vscode'],
    },
    {
      type: 'category',
      label: 'Serial',
      link: {
        type: 'generated-index',
        title: 'Serial',
        description: 'Serial Programming',
        slug: '/serial',
        keywords: ['serial'],
      },
      collapsed: false,
      items: [
        'avr-programming/serial/init',
        'avr-programming/serial/transmit-receive',
      ],
    },
    {
      type: 'category',
      label: 'Interrupts',
      link: {
        type: 'generated-index',
        title: 'Interrupts',
        description: 'Interrupt Programming',
        slug: '/interrupts',
        keywords: ['interrupts'],
      },
      collapsed: false,
      items: ['avr-programming/interrupts/introduction'],
    },
  ],
};

export default sidebars;
