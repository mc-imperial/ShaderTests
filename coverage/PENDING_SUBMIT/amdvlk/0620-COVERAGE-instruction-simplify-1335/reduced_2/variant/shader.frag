#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
void main()
{
 if(injectionSwitch.x > injectionSwitch.y)
  {
   discard;
  }
 int even_index = 1;
 while(((even_index << int(injectionSwitch.x)) >= 0) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   if(bool(bvec2((injectionSwitch.x > injectionSwitch.y), true)))
    {
     continue;
    }
   even_index --;
   if(gl_FragCoord.x < 1.0)
    {
     discard;
    }
   if(true)
    {
    }
  }
}
