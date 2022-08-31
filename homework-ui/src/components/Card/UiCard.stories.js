import UiCard from './UiCard.vue';

export default {
    title: 'UiCard',
    component: UiCard,
};

const Card = (args, { argTypes }) => ({
    components: { UiCard },
    props: Object.keys(argTypes),
    template: `
      <UiCard v-bind="$props">
          <template v-if="${'content' in args}" v-slot:content>${args.content}</template>
          <template v-if="${'actions' in args}" v-slot:actions>${args.actions}</template>
      </UiCard>
    `,
});

export const MainCard = Card.bind({});

MainCard.args = {
    title: 'Sample card',
    subtitle: 'Subtitle',
};

export const WithContentSlot = Card.bind({});

WithContentSlot.args = Object.assign(
    {},
    { ...MainCard.args },
    {
        content: `<strong>Test content slot</strong>`
    },
)

export const WithActionsSlot = Card.bind({});

WithActionsSlot.args = Object.assign(
    {},
    { ...WithContentSlot.args },
    {
        actions: `
            <div class="actions">
                <button type="submit">Submit</button>
                <button type="button">Cancel</button>
            </div>
        `
    },
)




