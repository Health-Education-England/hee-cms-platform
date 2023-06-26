package uk.nhs.hee.web.services.enums;

public enum FeaturedContentMethod {

    /**
     * {@code Latest} method
     */
    LATEST("Latest"),

    /**
     * {@code Manual} method
     */
    MANUAL("Manual"),

    /**
     * {@code Related} method
     */
    RELATED("Related");

    private final String key;

    /**
     * Constructor that initialises the featured content {@code method} ({@code hee:method}) field key names.
     *
     * @param key the name of featured content {@code method} ({@code hee:method}) field key.
     */
    FeaturedContentMethod(final String key) {
        this.key = key;
    }

    /**
     * Returns key name of the requested {@link FeaturedContentMethod} constant.
     *
     * @return String the key name of requested {@link FeaturedContentMethod} constant.
     */
    public String getKey() {
        return key;
    }

    /**
     * Returns {@link FeaturedContentMethod} instance for the given featured content method {@code key}.
     *
     * @param key the featured content method key.
     * @return the {@link FeaturedContentMethod} instance for the given featured content method {@code key}.
     */
    public static FeaturedContentMethod getByKey(final String key) {
        for (final FeaturedContentMethod method : FeaturedContentMethod.values()) {

            if (method.getKey().equals(key)) {
                return method;
            }

        }

        throw new IllegalArgumentException(
                FeaturedContentMethod.class.getSimpleName() +
                        " ENUM type has no constant with the specified key '" + key + "'"
        );
    }
}
