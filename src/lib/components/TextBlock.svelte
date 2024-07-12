<script lang="ts">
    import {PortableText, type InputValue} from '@portabletext/svelte';

    export let text: InputValue;
</script>

<PortableText
    value={text}
    components={{}}
/>