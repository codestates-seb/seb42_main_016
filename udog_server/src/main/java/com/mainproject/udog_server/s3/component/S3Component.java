package com.mainproject.udog_server.s3.component;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@ConfigurationProperties(prefix = "cloud.aws.s3")
public class S3Component {
    private String bucket;
}
