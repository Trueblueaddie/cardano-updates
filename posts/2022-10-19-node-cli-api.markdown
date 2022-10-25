# Node-Api-Cli Update
# 2022-10-18 - 2022-11-01

## Executive Summary

This sprint saw the addition of the long awaited tx-mempool command that allows user to query the local node's mempool for the following information:
- Ask the node about the current mempool's capacity and sizes
- Request the next transaction from the mempool's current list
- Query if a particular transaction exists in the mempool

Outside of this feature the team has been focused on responding to user requests (e.g exposing functions, types and implementing instances they need) and refactoring cardano-cli/cardano-api. The metric `tx_submit_fail_count` has been added to the submit api so users can track how many transactions have failed. Other improvements have been made:
- Documentation improvments
- Test output has been improved so diagnosing failures is now easier
- Enabling stale bot to close stale issues and PRs (reduces clutter on the node repo)
- Refactoring of cardano-testnet making it more useable as a library (ongoing)
- Release 1.35.4 was merged (still in QA however)
## Completed

- [Release 1.35.4](https://github.com/input-output-hk/cardano-node/pull/4508)

### cardano-cli
- [Add tx-mempool command to CLI](https://github.com/input-output-hk/cardano-node/pull/4276)
- [BUGFIX] - [Fix query era mismatch bug in transaction build command](https://github.com/input-output-hk/cardano-node/pull/4538)
- [Serenity] - [Condense Read and Validation modules in cardano-cli](https://github.com/input-output-hk/cardano-node/pull/4516)

### cardano-api
- [Return Lovelace for calculateMinimumUTxO](https://github.com/input-output-hk/cardano-node/pull/4482)
- [Export IsPlutusScriptLanguage from cardano-api](https://github.com/input-output-hk/cardano-node/pull/4554)
- [Reduce exposed modules in cardano-api](https://github.com/input-output-hk/cardano-node/pull/4546)
- [Add ToJSON and FromJSON instances for Address](https://github.com/input-output-hk/cardano-node/pull/4568)
- [Export TxIns type alias from Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4565)
- [Export more generators from cardano-api](https://github.com/input-output-hk/cardano-node/pull/4534)

### cardano-submit-api
- [Add tx_submit_fail_count metric](https://github.com/input-output-hk/cardano-node/pull/4566)

### cardano-node
- [Upgrade to cabal-3.8.1.0](https://github.com/input-output-hk/cardano-node/pull/4549)
- [Add Plutus minting script doc](https://github.com/input-output-hk/cardano-node/pull/2883)
- [Improve test output](https://github.com/input-output-hk/cardano-node/pull/4575/files)
- [Enable stale bot](https://github.com/input-output-hk/cardano-node/pull/4586)
- [Add link to troubleshooting page in the wiki](https://github.com/input-output-hk/cardano-node/pull/4557)

### cardano-testnet
- [Add single entrypoint for starting testnets](https://github.com/input-output-hk/cardano-node/pull/4544)

## In Progress

### cardano-cli
- [BUGFIX]- [Stop the cli from changing the bytes in user-supplied data](https://github.com/input-output-hk/cardano-node/pull/4537)
- [Infer protocol params in transaction build](https://github.com/input-output-hk/cardano-node/pull/4431)
- [Allow assembling transactions with no witnesses](https://github.com/input-output-hk/cardano-node/pull/4408)
- [Multiple pools support in query stake snapshot](https://github.com/input-output-hk/cardano-node/pull/4279)
- [Optimise query leadership schedule command](https://github.com/input-output-hk/cardano-node/pull/4250)
- [Optimise query stake snapshot command](https://github.com/input-output-hk/cardano-node/pull/4179)
- [Debug output for transaction submit](https://github.com/input-output-hk/cardano-node/pull/3819)

### cardano-api
- [Make TxBodyContent an instance of Monoid](https://github.com/input-output-hk/cardano-node/pull/4458)
- [Auto-balance multiasset transactions](https://github.com/input-output-hk/cardano-node/pull/4450)

### cardano-node
- [Stop running CI when the only changes are to docs](https://github.com/input-output-hk/cardano-node/pull/4263)
- [Rename TestEnableDevelopmentHardForkEras](https://github.com/input-output-hk/cardano-node/pull/4341)

