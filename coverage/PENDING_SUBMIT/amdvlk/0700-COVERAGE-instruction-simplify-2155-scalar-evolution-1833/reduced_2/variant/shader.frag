#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
int data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
 int k = 1, j = 1;
 for(int _injected_loop_counter = 0; _injected_loop_counter < int(injectionSwitch.y); _injected_loop_counter ++)
  {
   temp[k ++] = data[j ++];
  }
 int i = 1;
 data[i] = temp[1];
}
