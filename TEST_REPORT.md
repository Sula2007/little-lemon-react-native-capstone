# Validation report

## Automated logic tests

`npm test` passes three test groups:

- Empty/whitespace names and malformed email addresses cannot complete onboarding.
- Search is case insensitive and combines with category selection, including an empty result.
- Cart quantity totals are correct; malformed menu caches are rejected.

## Browser interaction verification

The actual Expo web export was tested in Chromium at a 390 x 844 viewport. All scenarios passed without browser runtime errors:

- First launch and disabled Next, including invalid email.
- Successful onboarding and populated profile.
- Category selection, combined search, empty-state reset and ingredient search.
- Dish detail, quantity, cart total, demo confirmation and back navigation.
- Saved surname, phone and notification preference.
- Profile values and notification preference after page reload.
- Discarding unsaved changes.
- Logout returns to empty onboarding; this remains true after reload.

## Build verification

- `expo export --platform web`: passed.
- `expo export --platform android`: passed, including Hermes bundle generation.

An Android/iOS simulator or physical device was not used. Native runtime behavior should still be reviewed on a device. No real order, payment or email was sent.
