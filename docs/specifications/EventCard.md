# Event Card Specification

## Purpose

Present upcoming events in a format that is faster to scan than a traditional calendar.

## Required Information

- Event title
- Game or category
- Date
- Start time
- Optional entry fee
- Optional seat or registration status
- Details action

## Optional Information

- Event artwork
- Format
- Age guidance
- Registration link

## States

- Upcoming
- Today
- Sold out
- Cancelled
- Registration available

## Responsive Behavior

- Cards may display in a grid on desktop
- Cards stack or scroll horizontally on mobile
- Critical event information must remain visible without opening details

## Accessibility

- Dates must be readable by assistive technology
- Status must not rely on color alone
- Entire card should not create conflicting nested links

## Acceptance Criteria

- Users can compare events quickly
- Date and time are visually prominent
- Every interactive control has a clear accessible name
