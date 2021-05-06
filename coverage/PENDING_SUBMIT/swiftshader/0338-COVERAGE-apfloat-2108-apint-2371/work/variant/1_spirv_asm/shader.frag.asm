; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 89
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %70
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %9 "v1"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %27 "c"
               OpName %38 "a"
               OpName %40 "buf1"
               OpMemberName %40 0 "_GLF_uniform_int_values"
               OpName %42 ""
               OpName %46 "b"
               OpName %56 "v2"
               OpName %70 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %39 ArrayStride 16
               OpMemberDecorate %40 0 Offset 0
               OpDecorate %40 Block
               OpDecorate %42 DescriptorSet 0
               OpDecorate %42 Binding 1
               OpDecorate %70 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 3
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 3
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpConstant %16 1
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %16 2
         %25 = OpTypeVector %6 2
         %26 = OpTypePointer Function %25
         %28 = OpConstant %10 0
         %29 = OpTypePointer Function %6
         %32 = OpConstant %6 1
         %37 = OpTypePointer Function %16
         %39 = OpTypeArray %16 %11
         %40 = OpTypeStruct %39
         %41 = OpTypePointer Uniform %40
         %42 = OpVariable %41 Uniform
         %43 = OpTypePointer Uniform %16
         %53 = OpConstant %10 2
         %54 = OpTypeArray %7 %53
         %55 = OpTypePointer Function %54
         %68 = OpTypeVector %6 4
         %69 = OpTypePointer Output %68
         %70 = OpVariable %69 Output
         %77 = OpConstant %10 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %27 = OpVariable %26 Function
         %38 = OpVariable %37 Function
         %46 = OpVariable %37 Function
         %56 = OpVariable %55 Function
         %20 = OpAccessChain %19 %15 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %15 %17 %22
         %24 = OpLoad %6 %23
         %30 = OpAccessChain %29 %27 %28
         %31 = OpLoad %6 %30
         %33 = OpFSub %6 %31 %32
         %34 = OpConvertFToS %16 %33
         %35 = OpConvertSToF %6 %34
         %36 = OpCompositeConstruct %7 %21 %24 %35
               OpStore %9 %36
         %44 = OpAccessChain %43 %42 %17 %17
         %45 = OpLoad %16 %44
               OpStore %38 %45
         %47 = OpLoad %16 %38
         %48 = OpAccessChain %43 %42 %17 %18
         %49 = OpLoad %16 %48
         %50 = OpAccessChain %43 %42 %17 %22
         %51 = OpLoad %16 %50
         %52 = OpExtInst %16 %1 SClamp %47 %49 %51
               OpStore %46 %52
         %57 = OpAccessChain %43 %42 %17 %18
         %58 = OpLoad %16 %57
         %59 = OpLoad %7 %9
         %60 = OpAccessChain %19 %15 %17 %17
         %61 = OpLoad %6 %60
         %62 = OpCompositeConstruct %7 %61 %61 %61
         %63 = OpFSub %7 %59 %62
         %64 = OpAccessChain %8 %56 %58
               OpStore %64 %63
         %65 = OpLoad %16 %46
         %66 = OpLoad %7 %9
         %67 = OpAccessChain %8 %56 %65
               OpStore %67 %66
         %71 = OpAccessChain %43 %42 %17 %17
         %72 = OpLoad %16 %71
         %73 = OpAccessChain %29 %56 %72 %28
         %74 = OpLoad %6 %73
         %75 = OpAccessChain %43 %42 %17 %17
         %76 = OpLoad %16 %75
         %78 = OpAccessChain %29 %56 %76 %77
         %79 = OpLoad %6 %78
         %80 = OpAccessChain %43 %42 %17 %17
         %81 = OpLoad %16 %80
         %82 = OpAccessChain %29 %56 %81 %77
         %83 = OpLoad %6 %82
         %84 = OpAccessChain %43 %42 %17 %17
         %85 = OpLoad %16 %84
         %86 = OpAccessChain %29 %56 %85 %28
         %87 = OpLoad %6 %86
         %88 = OpCompositeConstruct %68 %74 %79 %83 %87
               OpStore %70 %88
               OpReturn
               OpFunctionEnd
