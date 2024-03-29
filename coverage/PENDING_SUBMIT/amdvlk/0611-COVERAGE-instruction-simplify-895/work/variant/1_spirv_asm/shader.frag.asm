; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 104
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %30 %85
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %11 "a"
               OpName %30 "gl_FragCoord"
               OpName %37 "buf0"
               OpMemberName %37 0 "_GLF_uniform_float_values"
               OpName %39 ""
               OpName %55 "f"
               OpName %60 "buf1"
               OpMemberName %60 0 "_GLF_uniform_int_values"
               OpName %62 ""
               OpName %85 "_GLF_color"
               OpDecorate %30 BuiltIn FragCoord
               OpDecorate %36 ArrayStride 16
               OpMemberDecorate %37 0 Offset 0
               OpDecorate %37 Block
               OpDecorate %39 DescriptorSet 0
               OpDecorate %39 Binding 0
               OpDecorate %59 ArrayStride 16
               OpMemberDecorate %60 0 Offset 0
               OpDecorate %60 Block
               OpDecorate %62 DescriptorSet 0
               OpDecorate %62 Binding 1
               OpDecorate %85 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypePointer Function %6
         %12 = OpConstant %6 1
         %27 = OpTypeFloat 32
         %28 = OpTypeVector %27 4
         %29 = OpTypePointer Input %28
         %30 = OpVariable %29 Input
         %31 = OpTypeInt 32 0
         %32 = OpConstant %31 1
         %33 = OpTypePointer Input %27
         %36 = OpTypeArray %27 %32
         %37 = OpTypeStruct %36
         %38 = OpTypePointer Uniform %37
         %39 = OpVariable %38 Uniform
         %40 = OpTypePointer Uniform %27
         %43 = OpTypeBool
         %46 = OpConstant %6 10
         %54 = OpTypePointer Function %27
         %56 = OpConstant %27 1
         %58 = OpConstant %31 2
         %59 = OpTypeArray %6 %58
         %60 = OpTypeStruct %59
         %61 = OpTypePointer Uniform %60
         %62 = OpVariable %61 Uniform
         %63 = OpTypePointer Uniform %6
         %68 = OpTypeVector %27 2
         %76 = OpConstant %27 7.9000001
         %79 = OpConstant %27 8.10000038
         %84 = OpTypePointer Output %28
         %85 = OpVariable %84 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %55 = OpVariable %54 Function
               OpStore %8 %9
               OpStore %11 %12
               OpBranch %13
         %13 = OpLabel
               OpLoopMerge %15 %16 None
               OpBranch %14
         %14 = OpLabel
         %17 = OpLoad %6 %8
         %18 = OpIAdd %6 %17 %12
               OpStore %8 %18
               OpBranch %19
         %19 = OpLabel
               OpLoopMerge %21 %22 None
               OpBranch %20
         %20 = OpLabel
         %23 = OpLoad %6 %8
         %24 = OpIAdd %6 %23 %12
               OpStore %8 %24
         %25 = OpLoad %6 %11
         %26 = OpIAdd %6 %25 %12
               OpStore %11 %26
               OpBranch %22
         %22 = OpLabel
         %34 = OpAccessChain %33 %30 %32
         %35 = OpLoad %27 %34
         %41 = OpAccessChain %40 %39 %9 %9
         %42 = OpLoad %27 %41
         %44 = OpFOrdLessThan %43 %35 %42
         %45 = OpLoad %6 %8
         %47 = OpSLessThan %43 %45 %46
         %48 = OpLogicalAnd %43 %44 %47
               OpBranchConditional %48 %19 %21
         %21 = OpLabel
               OpBranch %16
         %16 = OpLabel
         %49 = OpLoad %6 %11
         %50 = OpINotEqual %43 %49 %12
         %51 = OpLoad %6 %8
         %52 = OpSLessThan %43 %51 %46
         %53 = OpLogicalAnd %43 %50 %52
               OpBranchConditional %53 %13 %15
         %15 = OpLabel
         %57 = OpLoad %6 %11
         %64 = OpAccessChain %63 %62 %9 %9
         %65 = OpLoad %6 %64
         %66 = OpIAdd %6 %57 %65
         %67 = OpConvertSToF %27 %66
         %69 = OpCompositeConstruct %68 %56 %67
         %70 = OpAccessChain %63 %62 %9 %9
         %71 = OpLoad %6 %70
         %72 = OpConvertSToF %27 %71
         %73 = OpCompositeConstruct %68 %72 %72
         %74 = OpDot %27 %69 %73
               OpStore %55 %74
         %75 = OpLoad %27 %55
         %77 = OpFOrdGreaterThan %43 %75 %76
         %78 = OpLoad %27 %55
         %80 = OpFOrdLessThan %43 %78 %79
         %81 = OpLogicalAnd %43 %77 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %99
         %82 = OpLabel
         %86 = OpAccessChain %63 %62 %9 %9
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %27 %87
         %89 = OpAccessChain %63 %62 %9 %12
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %27 %90
         %92 = OpAccessChain %63 %62 %9 %12
         %93 = OpLoad %6 %92
         %94 = OpConvertSToF %27 %93
         %95 = OpAccessChain %63 %62 %9 %9
         %96 = OpLoad %6 %95
         %97 = OpConvertSToF %27 %96
         %98 = OpCompositeConstruct %28 %88 %91 %94 %97
               OpStore %85 %98
               OpBranch %83
         %99 = OpLabel
        %100 = OpAccessChain %63 %62 %9 %12
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %27 %101
        %103 = OpCompositeConstruct %28 %102 %102 %102 %102
               OpStore %85 %103
               OpBranch %83
         %83 = OpLabel
               OpReturn
               OpFunctionEnd
