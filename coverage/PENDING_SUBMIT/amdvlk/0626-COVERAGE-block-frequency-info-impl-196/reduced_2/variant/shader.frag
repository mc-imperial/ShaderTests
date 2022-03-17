#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
void main()
{
 int i = 1;
 ivec2 p = ivec2(1);
 do
  {
   _GLF_global_loop_count ++;
   if(vec2(1.0).x > injectionSwitch.y)
    {
     break;
     continue;
    }
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
   int directions = 0;
   if(gl_FragCoord.x < 1.0)
    {
     break;
    }
   if(1.0 > injectionSwitch.y)
    {
     return;
    }
   if(gl_FragCoord.x < 0.0)
    {
     discard;
    }
   if(gl_FragCoord.y < 0.0)
    {
     break;
    }
   if(gl_FragCoord.x < 0.0)
    {
     return;
    }
   if(gl_FragCoord.x < 0.0)
    {
     return;
    }
   if(injectionSwitch.x > 1.0)
    {
     discard;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     break;
    }
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
   if(gl_FragCoord.x < 0.0)
    {
     break;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     return;
    }
   if(gl_FragCoord.x < 0.0)
    {
     break;
    }
   if(gl_FragCoord.y < 0.0)
    {
     discard;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     break;
    }
   if(gl_FragCoord.x < 0.0)
    {
     discard;
    }
   if(gl_FragCoord.x < 0.0)
    {
     break;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     discard;
    }
   if(gl_FragCoord.y < 1.0)
    {
     discard;
    }
   if(gl_FragCoord.x < 0.0)
    {
     return;
    }
   if(gl_FragCoord.y < 1.0)
    {
     return;
    }
   if(1.0 > injectionSwitch.y)
    {
     discard;
    }
   if(gl_FragCoord.x < 0.0)
    {
     return;
    }
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
   if(gl_FragCoord.y < 1.0)
    {
     break;
    }
   if(1.0 > injectionSwitch.y)
    {
     break;
    }
   if(gl_FragCoord.y < 1.0)
    {
     return;
    }
   if(1.0 > injectionSwitch.y)
    {
     discard;
    }
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
   if(gl_FragCoord.y < 0.0)
    {
     break;
    }
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
   if(gl_FragCoord.x < 0.0)
    {
     return;
    }
   if(gl_FragCoord.x < 0.0)
    {
     return;
    }
   if((p.x) == 0)
    {
     directions += 1;
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(gl_FragCoord.y < 1.0)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
    }
   if(injectionSwitch.x > 1.0)
    {
     discard;
    }
   if(1.0 > injectionSwitch.y)
    {
     return;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     discard;
    }
   if(gl_FragCoord.x < 1.0)
    {
     break;
    }
   if(1.0 > injectionSwitch.y)
    {
     discard;
    }
   if(directions == 0)
    {
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       break;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     int j = 1;
     for(     i;
 (i < 8) && (_GLF_global_loop_count < _GLF_global_loop_bound); i)
      {
       _GLF_global_loop_count ++;
       if(injectionSwitch.x > injectionSwitch.y)
        {
         discard;
        }
       if(gl_FragCoord.x < 0.0)
        {
         discard;
        }
       if(injectionSwitch.x > injectionSwitch.y)
        {
         discard;
        }
       if(injectionSwitch.x > injectionSwitch.y)
        {
         discard;
        }
       if(gl_FragCoord.x < 0.0)
        {
         return;
        }
       if(injectionSwitch.x > injectionSwitch.y)
        {
         discard;
        }
       if(injectionSwitch.x > vec2(1.0).y)
        {
         discard;
        }
       p.x = j;
       if(gl_FragCoord.y < 0.0)
        {
         discard;
        }
       if(gl_FragCoord.x < 0.0)
        {
         discard;
        }
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       return;
      }
    }
   else
    {
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       break;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       break;
      }
     if(gl_FragCoord.x < 0.0)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       return;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       break;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       if(gl_FragCoord.x < 0.0)
        {
         return;
        }
       if(gl_FragCoord.y < 0.0)
        {
         continue;
        }
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       break;
      }
     if(gl_FragCoord.x < dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0)))
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     if(gl_FragCoord.y < 1.0)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(injectionSwitch.x > vec2(1.0).y)
      {
       break;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     if(gl_FragCoord.y < 1.0)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     if(gl_FragCoord.y < length(vec2(0.0, 0.0)))
      {
       break;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       break;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       break;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       break;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       discard;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     if(gl_FragCoord.x < 0.0)
      {
       discard;
      }
     if(gl_FragCoord.y < 0.0)
      {
       discard;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
       return;
      }
    }
   if(gl_FragCoord.y < 0.0)
    {
     break;
    }
   if(gl_FragCoord.x < 1.0)
    {
     continue;
    }
   return;
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
