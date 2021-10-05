#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 vec2 color = vec2(1.0);
 color = (mat3(1.0) * vec3(resolution, 1)).yx;
 _GLF_color = vec4(vec3(color, 1.0), 1.0);
}
