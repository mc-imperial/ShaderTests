#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 vec2 injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int i = 1;
 mat3 pos = mat3(1.0);
 pos = mat3(vec3(1, 0, int(injectionSwitch.y)), vec3(1, 1, int(injectionSwitch.y)), vec3(1.0));
 vec3 vecCoor = vec3(1.0);
 vecCoor = roundEven(pos * vec3(gl_FragCoord.xx, 1));
 vec2 color = vec2(1.0);
 color = asinh(vecCoor.yx);
 isnan(float(i)) ? 1.0 : 1.0;
 _GLF_color = vec4(vec3(color, 1.0), 1.0);
}
