; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 108
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %59 %89
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "buf1"
               OpMemberName %8 0 "injectionSwitch"
               OpName %10 ""
               OpName %27 "a"
               OpName %32 "i"
               OpName %59 "gl_FragCoord"
               OpName %78 "buf0"
               OpMemberName %78 0 "_GLF_uniform_int_values"
               OpName %80 ""
               OpName %89 "_GLF_color"
               OpMemberDecorate %8 0 Offset 0
               OpDecorate %8 Block
               OpDecorate %10 DescriptorSet 0
               OpDecorate %10 Binding 1
               OpDecorate %41 RelaxedPrecision
               OpDecorate %59 BuiltIn FragCoord
               OpDecorate %77 ArrayStride 16
               OpMemberDecorate %78 0 Offset 0
               OpDecorate %78 Block
               OpDecorate %80 DescriptorSet 0
               OpDecorate %80 Binding 0
               OpDecorate %89 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypeStruct %7
          %9 = OpTypePointer Uniform %8
         %10 = OpVariable %9 Uniform
         %11 = OpTypeInt 32 1
         %12 = OpConstant %11 0
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 0
         %15 = OpTypePointer Uniform %6
         %18 = OpConstant %13 1
         %21 = OpTypeBool
         %26 = OpTypePointer Function %11
         %33 = OpConstant %11 1
         %40 = OpConstant %11 8
         %57 = OpTypeVector %6 4
         %58 = OpTypePointer Input %57
         %59 = OpVariable %58 Input
         %60 = OpTypePointer Input %6
         %63 = OpConstant %6 0
         %73 = OpConstant %11 64
         %76 = OpConstant %13 3
         %77 = OpTypeArray %11 %76
         %78 = OpTypeStruct %77
         %79 = OpTypePointer Uniform %78
         %80 = OpVariable %79 Uniform
         %81 = OpConstant %11 2
         %82 = OpTypePointer Uniform %11
         %88 = OpTypePointer Output %57
         %89 = OpVariable %88 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %27 = OpVariable %26 Function
         %32 = OpVariable %26 Function
         %16 = OpAccessChain %15 %10 %12 %14
         %17 = OpLoad %6 %16
         %19 = OpAccessChain %15 %10 %12 %18
         %20 = OpLoad %6 %19
         %22 = OpFOrdGreaterThan %21 %17 %20
               OpSelectionMerge %24 None
               OpBranchConditional %22 %23 %24
         %23 = OpLabel
               OpReturn
         %24 = OpLabel
               OpStore %27 %12
               OpBranch %28
         %28 = OpLabel
               OpLoopMerge %30 %31 None
               OpBranch %29
         %29 = OpLabel
               OpStore %32 %33
               OpBranch %34
         %34 = OpLabel
               OpLoopMerge %36 %37 None
               OpBranch %38
         %38 = OpLabel
         %39 = OpLoad %11 %32
         %41 = OpExtInst %11 %1 FindILsb %40
         %42 = OpSLessThan %21 %39 %41
               OpBranchConditional %42 %35 %36
         %35 = OpLabel
         %43 = OpLoad %11 %32
         %44 = OpLoad %11 %27
         %45 = OpSLessThan %21 %43 %44
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %47
         %46 = OpLabel
               OpBranch %37
         %47 = OpLabel
         %49 = OpAccessChain %15 %10 %12 %14
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %15 %10 %12 %18
         %52 = OpLoad %6 %51
         %53 = OpFOrdGreaterThan %21 %50 %52
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %56
         %54 = OpLabel
               OpBranch %55
         %56 = OpLabel
         %61 = OpAccessChain %60 %59 %18
         %62 = OpLoad %6 %61
         %64 = OpFOrdLessThan %21 %62 %63
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %66
         %65 = OpLabel
               OpKill
         %66 = OpLabel
               OpBranch %55
         %55 = OpLabel
               OpBranch %37
         %37 = OpLabel
         %68 = OpLoad %11 %32
         %69 = OpIAdd %11 %68 %33
               OpStore %32 %69
               OpBranch %34
         %36 = OpLabel
         %70 = OpLoad %11 %27
         %71 = OpIAdd %11 %70 %33
               OpStore %27 %71
               OpBranch %31
         %31 = OpLabel
         %72 = OpLoad %11 %27
         %74 = OpSLessThan %21 %72 %73
               OpBranchConditional %74 %28 %30
         %30 = OpLabel
         %75 = OpLoad %11 %27
         %83 = OpAccessChain %82 %80 %12 %81
         %84 = OpLoad %11 %83
         %85 = OpIEqual %21 %75 %84
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %103
         %86 = OpLabel
         %90 = OpAccessChain %82 %80 %12 %33
         %91 = OpLoad %11 %90
         %92 = OpConvertSToF %6 %91
         %93 = OpAccessChain %82 %80 %12 %12
         %94 = OpLoad %11 %93
         %95 = OpConvertSToF %6 %94
         %96 = OpAccessChain %82 %80 %12 %12
         %97 = OpLoad %11 %96
         %98 = OpConvertSToF %6 %97
         %99 = OpAccessChain %82 %80 %12 %33
        %100 = OpLoad %11 %99
        %101 = OpConvertSToF %6 %100
        %102 = OpCompositeConstruct %57 %92 %95 %98 %101
               OpStore %89 %102
               OpBranch %87
        %103 = OpLabel
        %104 = OpAccessChain %82 %80 %12 %12
        %105 = OpLoad %11 %104
        %106 = OpConvertSToF %6 %105
        %107 = OpCompositeConstruct %57 %106 %106 %106 %106
               OpStore %89 %107
               OpBranch %87
         %87 = OpLabel
               OpReturn
               OpFunctionEnd
