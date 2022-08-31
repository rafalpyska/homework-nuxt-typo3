<template>
	<span class="tag">
		<span>{{ content }}</span>
		<button
			v-if="closable"
			type="button"
			class="tag-btn tag-btn--remove"
			@click="remove(content)"
		>
			&times;
		</button>
	</span>
</template>
<script>
	export default {
		name: 'UiChip',
		props: {
			closable: {
				type: Boolean,
				default: false,
			},
			content: {
				type: String,
				required: true,
			}
		},
		methods: {
			remove(tag) {
				this.$emit('click:remove', tag);
			}
		},
	}
</script>
<style scoped lang="scss">
	.tag {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 0.25rem;
		font-size: 0.875rem;
		background-color: #bcdefa;
		color: #1c3d5a;
		border-radius: 0.25rem;
		&-btn {
			cursor: pointer;
    	padding: 0;
			background: transparent;
			border: 0;
			&--remove {
				color: #2779bd;
				font-size: 1.125rem;
			}
		}
	}
</style>