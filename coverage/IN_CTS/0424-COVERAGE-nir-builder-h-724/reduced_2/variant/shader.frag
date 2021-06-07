#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

mat4x3 m43 = mat4x3(1.0);

void main()
{
 int c = 1;
 int _GLF_SPLIT_LOOP_COUNTERr = 1;
 _GLF_SPLIT_LOOP_COUNTERr = 3;
 m43[c][_GLF_SPLIT_LOOP_COUNTERr] = 1.0;
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 sums[7] += m43[1][1];
 _GLF_color = vec4(vec3(sums[1]), 1.0);
}
