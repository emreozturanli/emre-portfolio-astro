---
name: create-travel-entry
description: Create a structured travel entry with description and suggested tags.
---

# Create Travel Entry

Create structured travel entries with descriptions, photos, and tags.

## Inputs

- **location**: The travel destination (city, country, or place)
- **photos**: Photos from the trip
- **notes**: Raw notes or memories from the visit

## Output

A markdown travel entry file ready for `src/content/travel/`.

## Instructions

1. **Collect Information**
   - Get the location name
   - Collect any photos to include
   - Gather raw notes or memories

2. **Generate Description**
   - Write a brief, personal description (2-3 sentences)
   - Capture the essence of the experience
   - Keep it authentic and simple

3. **Structure**
   - Title: Location name
   - Description: Brief personal summary
   - Gallery: Photos with captions (if provided)
   - Tags: Location-based and type-based

4. **Frontmatter**

   ```yaml
   ---
   title: 'Location Name'
   description: 'Brief description'
   date: YYYY-MM-DD
   country: 'Country'
   city: 'City'
   tags: ['country', 'city', 'type']
   images: []
   ---
   ```

5. **Suggest Tags**
   - Country (lowercase, e.g., "japan", "italy")
   - City (lowercase, e.g., "tokyo", "rome")
   - Type (e.g., "city-trip", "nature", "food", "culture")

6. **Save Location**
   - Save to `src/content/travel/[location-slug].md`
   - Use kebab-case for filename
