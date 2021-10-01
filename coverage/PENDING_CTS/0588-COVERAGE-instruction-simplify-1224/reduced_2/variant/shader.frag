#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

int performPartition()
{
 ivec2(int(injectionSwitch.x), 1) >> 90955;
 return 1;
}
void main()
{
 performPartition();
}
