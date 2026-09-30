<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep demo ordering state in the shared BakeryProvider with browser storage; this is a demo without a connected backend.
- Keep product catalog and oven-time helpers in the shared bakery module so every requested route presents consistent prices and ordering rules.
- Keep shared navigation, fulfillment choice, and footer in the root shell so the seven pages behave consistently.
