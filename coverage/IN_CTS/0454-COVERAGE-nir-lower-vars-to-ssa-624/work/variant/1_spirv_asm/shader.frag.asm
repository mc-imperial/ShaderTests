; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 103
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %89
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m32"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %29 "a"
               OpName %33 "buf0"
               OpMemberName %33 0 "_GLF_uniform_int_values"
               OpName %35 ""
               OpName %53 "sums"
               OpName %61 "c"
               OpName %89 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 0
               OpDecorate %89 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypeMatrix %7 3
          %9 = OpTypePointer Function %8
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 1
         %23 = OpConstant %6 0
         %28 = OpTypePointer Function %17
         %30 = OpConstant %17 3
         %31 = OpConstant %11 3
         %32 = OpTypeArray %17 %31
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpTypePointer Uniform %17
         %39 = OpConstant %17 1
         %40 = OpTypeBool
         %49 = OpTypePointer Function %6
         %51 = OpTypeArray %6 %31
         %52 = OpTypePointer Function %51
         %70 = OpConstant %17 2
         %87 = OpTypeVector %6 4
         %88 = OpTypePointer Output %87
         %89 = OpVariable %88 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
         %29 = OpVariable %28 Function
         %53 = OpVariable %52 Function
         %61 = OpVariable %28 Function
         %20 = OpAccessChain %19 %16 %18 %18
         %21 = OpLoad %6 %20
         %24 = OpCompositeConstruct %7 %21 %23
         %25 = OpCompositeConstruct %7 %23 %21
         %26 = OpCompositeConstruct %7 %23 %23
         %27 = OpCompositeConstruct %8 %24 %25 %26
               OpStore %10 %27
               OpStore %29 %30
         %37 = OpAccessChain %36 %35 %18 %18
         %38 = OpLoad %17 %37
         %41 = OpIEqual %40 %38 %39
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %43
         %42 = OpLabel
         %44 = OpLoad %17 %29
         %45 = OpAccessChain %36 %35 %18 %18
         %46 = OpLoad %17 %45
         %47 = OpAccessChain %19 %16 %18 %18
         %48 = OpLoad %6 %47
         %50 = OpAccessChain %49 %10 %44 %46
               OpStore %50 %48
               OpBranch %43
         %43 = OpLabel
         %54 = OpAccessChain %19 %16 %18 %18
         %55 = OpLoad %6 %54
         %56 = OpAccessChain %19 %16 %18 %18
         %57 = OpLoad %6 %56
         %58 = OpAccessChain %19 %16 %18 %18
         %59 = OpLoad %6 %58
         %60 = OpCompositeConstruct %51 %55 %57 %59
               OpStore %53 %60
         %62 = OpAccessChain %36 %35 %18 %18
         %63 = OpLoad %17 %62
               OpStore %61 %63
               OpBranch %64
         %64 = OpLabel
               OpLoopMerge %66 %67 None
               OpBranch %68
         %68 = OpLabel
         %69 = OpLoad %17 %61
         %71 = OpAccessChain %36 %35 %18 %70
         %72 = OpLoad %17 %71
         %73 = OpSLessThan %40 %69 %72
               OpBranchConditional %73 %65 %66
         %65 = OpLabel
         %74 = OpAccessChain %36 %35 %18 %70
         %75 = OpLoad %17 %74
         %76 = OpLoad %17 %61
         %77 = OpAccessChain %36 %35 %18 %18
         %78 = OpLoad %17 %77
         %79 = OpAccessChain %49 %10 %76 %78
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %49 %53 %75
         %82 = OpLoad %6 %81
         %83 = OpFAdd %6 %82 %80
         %84 = OpAccessChain %49 %53 %75
               OpStore %84 %83
               OpBranch %67
         %67 = OpLabel
         %85 = OpLoad %17 %61
         %86 = OpIAdd %17 %85 %39
               OpStore %61 %86
               OpBranch %64
         %66 = OpLabel
         %90 = OpAccessChain %36 %35 %18 %18
         %91 = OpLoad %17 %90
         %92 = OpAccessChain %49 %53 %91
         %93 = OpLoad %6 %92
         %94 = OpAccessChain %19 %16 %18 %39
         %95 = OpLoad %6 %94
         %96 = OpAccessChain %19 %16 %18 %39
         %97 = OpLoad %6 %96
         %98 = OpAccessChain %36 %35 %18 %39
         %99 = OpLoad %17 %98
        %100 = OpAccessChain %49 %53 %99
        %101 = OpLoad %6 %100
        %102 = OpCompositeConstruct %87 %93 %95 %97 %101
               OpStore %89 %102
               OpReturn
               OpFunctionEnd
