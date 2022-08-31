import UiChip from './UiChip.vue';

export default {
    title: 'UiChip',
    component: UiChip,
};

const Chip = (args, { argTypes }) => ({
    components: { UiChip },
    props: Object.keys(argTypes),
    template: `
      <UiChip v-bind="$props" />
    `,
});

export const RegularChip = Chip.bind({});

RegularChip.args = {
    content: `I'm a chip!`,
};

export const ClosableChip = Chip.bind({});

ClosableChip.args = Object.assign(
    {},
    { ...RegularChip.args },
    {
        closable: true,
    },
)
