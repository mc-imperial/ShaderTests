#version 320 es

precision highp int;

precision highp float;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 clamp(vec3(1.0), 1.0, float(min(bitCount(int(resolution.x)), bitCount(int(resolution.x)))));
}
