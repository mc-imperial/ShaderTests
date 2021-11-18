#version 320 es

precision highp int;

precision highp float;

// Contents of GLF_live2resolution: [0.910146, 0.7187312]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_live2resolution;
};
precision highp int;

precision highp float;

void main()
{
 dot(vec2(1.0, GLF_live2resolution.x - (- 0.0)), vec2(1.0));
}
