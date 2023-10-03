package org.uk.nhs.hee.web.email;

public interface TemplateService {
    String getTemplateByName(String name);

    String getPropertyByName(String name, String propertyName);
}
