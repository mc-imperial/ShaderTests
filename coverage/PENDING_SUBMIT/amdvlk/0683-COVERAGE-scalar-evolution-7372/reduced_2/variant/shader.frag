#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 vec2 injectionSwitch;
};
vec2 pattern(in vec2 x)
{
 vec3 m = vec3(1.0);
 for(int j = 1; 1 <= int(injectionSwitch.y); 1)
  {
   vec2 o = vec2(1.0);
   o = x;
   if(1.0 < m.x)
    {
     int k = 1;
     for(int _injected_loop_counter = 0; _injected_loop_counter < 1; _injected_loop_counter ++)
      {
       for(int _injected_loop_counter = 1; _injected_loop_counter != (1 ^ int(injectionSwitch.y)); _injected_loop_counter --)
        {
         while(k >= 0)
          {
           o = vec2(1.0);
           k --;
          }
        }
      }
     m = vec3(0.0, o);
    }
  }
 return vec2(1.0);
}
void main()
{
 vec2 uv = vec2(1.0);
 vec2 c = pattern(gl_FragCoord.xy);
}
