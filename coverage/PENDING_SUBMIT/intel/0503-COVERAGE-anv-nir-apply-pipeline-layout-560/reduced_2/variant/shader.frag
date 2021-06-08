#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 1) uniform sampler2D tex;

void main()
{
 vec2 coord = vec2(1.0);
 do
  {
   for(int _injected_loop_counter = 1; _injected_loop_counter != clamp(0, int(injectionSwitch.x), 1); _injected_loop_counter ++)
    {
     coord = vec2(1.0) / ((1.0 < injectionSwitch.y) ? 256.0 : 1.0);
    }
  }
 while(1.0 > injectionSwitch.y);
 _GLF_color = vec4(texture(tex, coord).xyz, 1.0);
}
