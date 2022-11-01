package com.ssafy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WidgetCreateRequest {
    private String name;

    private Integer row;

    private Integer col;

    private Long projectId;

    private String widgetCodeId;
}
