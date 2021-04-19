#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 int msb20 = 1;
 for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
  }
 if(1.0 > injectionSwitch.y)
  {
   for(   1;
 (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     msb20 = (msb20 * (1 - msb20));
    }
  }
 if(1 < msb20)
  {
   _GLF_color = vec4(1.0, resolution.y, 1.0, 1.0);
  }
 else
  {
  }
}
