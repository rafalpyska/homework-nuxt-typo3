import UiToggle from './UiToggle.vue';

export default {
    title: 'UiToggle',
    component: UiToggle,
};

const Toggle = (args, { argTypes }) => ({
    components: { UiToggle },
    props: Object.keys(argTypes),
    template: `
      <UiToggle v-bind="$props" v-model="value" />
    `,
});

export const ToggleChecked = Toggle.bind({});

ToggleChecked.args = {
    value: true,
};

export const ToggleUnchecked = Toggle.bind({});

ToggleUnchecked.args = {
    value: false,
};

