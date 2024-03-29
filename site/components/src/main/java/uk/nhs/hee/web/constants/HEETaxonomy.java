package uk.nhs.hee.web.constants;

public enum HEETaxonomy {

    HEE_GLOBAL_PROFESSIONS ("GlobalProfessions"),

    HEE_GLOBAL_HEALTHCARE_TOPICS ("GlobalHealthcareTopics"),

    HEE_GLOBAL_PUBLICATION_TYPES ("GlobalPublicationTypes"),

    HEE_GLOBAL_TAGS ("GlobalTags"),

    HEE_GLOBAL_TRAINING_TYPES ("GlobalTrainingTypes"),

    HEE_GLOBAL_RECRUITMENT_FORMAT ("GlobalRecruitmentFormat"),

    HEE_GLOBAL_CLINICAL_DISCIPLINE ("GlobalClinicalDiscipline"),

    HEE_GLOBAL_EVENT_TYPE ("GlobalEventTypes"),

    HEE_GLOBAL_DELIVERY_METHOD ("GlobalDeliveryMethod"),
    
    HEE_GLOBAL_REGIONS ("GlobalRegions"),

    HEE_GLOBAL_NEWS_TYPES("GlobalNewsTypes");

    private final String name;

    /**
     * Constructor that initialises the name of HEE taxonomies
     *
     * @param name the name of HEE taxonomy
     */
    HEETaxonomy(final String name) {
        this.name = name;
    }

    /**
     * Returns the name of HEE taxonomy
     *
     * @return the name of HEE taxonomy.
     */
    public String getName() {
        return this.name;
    }
}