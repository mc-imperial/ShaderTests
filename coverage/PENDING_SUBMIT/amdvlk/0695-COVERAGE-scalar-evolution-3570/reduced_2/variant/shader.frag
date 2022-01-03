#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
vec3 palette()
{
 for(int _injected_loop_counter = 1; true; 1)
  {
   for(int _injected_loop_counter = int(injectionSwitch.y); _injected_loop_counter != 1; _injected_loop_counter --)
    {
     for(int _injected_loop_counter = 1; 1 < int(injectionSwitch.y); 1)
      {
       return vec3(1.0);
      }
    }
  }
}
void main()
{
 for(int _injected_loop_counter = int(injectionSwitch.y); _injected_loop_counter > 1; 1)
  {
   palette();
  }
}
