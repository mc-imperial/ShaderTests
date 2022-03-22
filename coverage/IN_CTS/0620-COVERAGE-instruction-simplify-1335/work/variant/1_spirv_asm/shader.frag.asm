; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 104
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %60 %85
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "buf2"
               OpMemberName %8 0 "injectionSwitch"
               OpName %10 ""
               OpName %27 "a"
               OpName %41 "buf1"
               OpMemberName %41 0 "_GLF_uniform_int_values"
               OpName %43 ""
               OpName %60 "gl_FragCoord"
               OpName %65 "buf0"
               OpMemberName %65 0 "_GLF_uniform_float_values"
               OpName %67 ""
               OpName %85 "_GLF_color"
               OpMemberDecorate %8 0 Offset 0
               OpDecorate %8 Block
               OpDecorate %10 DescriptorSet 0
               OpDecorate %10 Binding 2
               OpDecorate %40 ArrayStride 16
               OpMemberDecorate %41 0 Offset 0
               OpDecorate %41 Block
               OpDecorate %43 DescriptorSet 0
               OpDecorate %43 Binding 1
               OpDecorate %60 BuiltIn FragCoord
               OpDecorate %64 ArrayStride 16
               OpMemberDecorate %65 0 Offset 0
               OpDecorate %65 Block
               OpDecorate %67 DescriptorSet 0
               OpDecorate %67 Binding 0
               OpDecorate %85 Location 0
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
         %28 = OpConstant %11 1
         %39 = OpConstant %13 2
         %40 = OpTypeArray %11 %39
         %41 = OpTypeStruct %40
         %42 = OpTypePointer Uniform %41
         %43 = OpVariable %42 Uniform
         %44 = OpTypePointer Uniform %11
         %58 = OpTypeVector %6 4
         %59 = OpTypePointer Input %58
         %60 = OpVariable %59 Input
         %61 = OpTypePointer Input %6
         %64 = OpTypeArray %6 %18
         %65 = OpTypeStruct %64
         %66 = OpTypePointer Uniform %65
         %67 = OpVariable %66 Uniform
         %74 = OpConstantTrue %21
         %84 = OpTypePointer Output %58
         %85 = OpVariable %84 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %27 = OpVariable %26 Function
         %16 = OpAccessChain %15 %10 %12 %14
         %17 = OpLoad %6 %16
         %19 = OpAccessChain %15 %10 %12 %18
         %20 = OpLoad %6 %19
         %22 = OpFOrdGreaterThan %21 %17 %20
               OpSelectionMerge %24 None
               OpBranchConditional %22 %23 %24
         %23 = OpLabel
               OpKill
         %24 = OpLabel
               OpStore %27 %28
               OpBranch %29
         %29 = OpLabel
               OpLoopMerge %31 %32 None
               OpBranch %33
         %33 = OpLabel
         %34 = OpLoad %11 %27
         %35 = OpAccessChain %15 %10 %12 %14
         %36 = OpLoad %6 %35
         %37 = OpConvertFToS %11 %36
         %38 = OpShiftLeftLogical %11 %34 %37
         %45 = OpAccessChain %44 %43 %12 %28
         %46 = OpLoad %11 %45
         %47 = OpSGreaterThanEqual %21 %38 %46
               OpBranchConditional %47 %30 %31
         %30 = OpLabel
         %48 = OpAccessChain %15 %10 %12 %14
         %49 = OpLoad %6 %48
         %50 = OpAccessChain %15 %10 %12 %18
         %51 = OpLoad %6 %50
         %52 = OpFOrdGreaterThan %21 %49 %51
               OpSelectionMerge %54 None
               OpBranchConditional %52 %53 %54
         %53 = OpLabel
               OpBranch %32
         %54 = OpLabel
         %56 = OpLoad %11 %27
         %57 = OpISub %11 %56 %28
               OpStore %27 %57
         %62 = OpAccessChain %61 %60 %14
         %63 = OpLoad %6 %62
         %68 = OpAccessChain %15 %67 %12 %12
         %69 = OpLoad %6 %68
         %70 = OpFOrdLessThan %21 %63 %69
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %72
         %71 = OpLabel
               OpKill
         %72 = OpLabel
               OpSelectionMerge %76 None
               OpBranchConditional %74 %75 %76
         %75 = OpLabel
               OpBranch %76
         %76 = OpLabel
               OpBranch %32
         %32 = OpLabel
               OpBranch %29
         %31 = OpLabel
         %77 = OpLoad %11 %27
         %78 = OpAccessChain %44 %43 %12 %12
         %79 = OpLoad %11 %78
         %80 = OpSNegate %11 %79
         %81 = OpIEqual %21 %77 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %99
         %82 = OpLabel
         %86 = OpAccessChain %44 %43 %12 %12
         %87 = OpLoad %11 %86
         %88 = OpConvertSToF %6 %87
         %89 = OpAccessChain %44 %43 %12 %28
         %90 = OpLoad %11 %89
         %91 = OpConvertSToF %6 %90
         %92 = OpAccessChain %44 %43 %12 %28
         %93 = OpLoad %11 %92
         %94 = OpConvertSToF %6 %93
         %95 = OpAccessChain %44 %43 %12 %12
         %96 = OpLoad %11 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpCompositeConstruct %58 %88 %91 %94 %97
               OpStore %85 %98
               OpBranch %83
         %99 = OpLabel
        %100 = OpAccessChain %44 %43 %12 %28
        %101 = OpLoad %11 %100
        %102 = OpConvertSToF %6 %101
        %103 = OpCompositeConstruct %58 %102 %102 %102 %102
               OpStore %85 %103
               OpBranch %83
         %83 = OpLabel
               OpReturn
               OpFunctionEnd
