# Incident Report: Payment Commission Bug

## Bug Discovery
- Found using: git bisect start
- Problematic commit: eee738f
- Author: Cr3at

## Root Cause
The bug was introduced in the "Optimize commission calculation" commit where:
1. Commission calculation was changed to return rate instead of amount
2. Возврат rate вместо суммы

## Fix Applied
- Reverted commit: 374b376
- Fix commit: b87c643
- Verification: git log -S"commission:" --patch

## Stash Usage
- Stashed work: WIP: Progressive commission feature
- Stash command used: git stash push -m
- Recovery successful: Yes

## Reflog Recovery
- Lost commit: 700b0bf
- Recovery command: git reflog |grep "added progressive commision"
- Restored SHA: ce0f20d

## Lessons Learned
Познакомился с командой stash, научился использовать reset и revert узнал об их отличиях и преемуществе каждой.
Овладел восстановлением данных с помощью reflog.
