; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 103
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %19 %78
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %6 "func("
               OpName %10 "_GLF_global_loop_count"
               OpName %14 "a"
               OpName %16 "b"
               OpName %19 "gl_FragCoord"
               OpName %27 "buf1"
               OpMemberName %27 0 "_GLF_uniform_float_values"
               OpName %29 ""
               OpName %57 "c"
               OpName %78 "_GLF_color"
               OpName %81 "buf0"
               OpMemberName %81 0 "_GLF_uniform_int_values"
               OpName %83 ""
               OpDecorate %19 BuiltIn FragCoord
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 1
               OpDecorate %78 Location 0
               OpDecorate %80 ArrayStride 16
               OpMemberDecorate %81 0 Offset 0
               OpDecorate %81 Block
               OpDecorate %83 DescriptorSet 0
               OpDecorate %83 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %8 = OpTypeInt 32 1
          %9 = OpTypePointer Private %8
         %10 = OpVariable %9 Private
         %11 = OpConstant %8 0
         %12 = OpTypeFloat 32
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %12 1
         %16 = OpVariable %13 Private
         %17 = OpTypeVector %12 4
         %18 = OpTypePointer Input %17
         %19 = OpVariable %18 Input
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 1
         %22 = OpTypePointer Input %12
         %25 = OpConstant %20 3
         %26 = OpTypeArray %12 %25
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %30 = OpTypePointer Uniform %12
         %33 = OpTypeBool
         %50 = OpConstant %8 10
         %53 = OpConstant %8 1
         %55 = OpConstant %12 256
         %56 = OpTypePointer Function %12
         %62 = OpConstant %8 2
         %77 = OpTypePointer Output %17
         %78 = OpVariable %77 Output
         %79 = OpConstant %20 2
         %80 = OpTypeArray %8 %79
         %81 = OpTypeStruct %80
         %82 = OpTypePointer Uniform %81
         %83 = OpVariable %82 Uniform
         %84 = OpTypePointer Uniform %8
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %10 %11
               OpStore %14 %15
               OpStore %16 %15
         %69 = OpFunctionCall %2 %6
         %70 = OpFunctionCall %2 %6
         %71 = OpLoad %12 %16
         %72 = OpAccessChain %30 %29 %11 %53
         %73 = OpLoad %12 %72
         %74 = OpFOrdEqual %33 %71 %73
               OpSelectionMerge %76 None
               OpBranchConditional %74 %75 %98
         %75 = OpLabel
         %85 = OpAccessChain %84 %83 %11 %11
         %86 = OpLoad %8 %85
         %87 = OpConvertSToF %12 %86
         %88 = OpAccessChain %84 %83 %11 %53
         %89 = OpLoad %8 %88
         %90 = OpConvertSToF %12 %89
         %91 = OpAccessChain %84 %83 %11 %53
         %92 = OpLoad %8 %91
         %93 = OpConvertSToF %12 %92
         %94 = OpAccessChain %84 %83 %11 %11
         %95 = OpLoad %8 %94
         %96 = OpConvertSToF %12 %95
         %97 = OpCompositeConstruct %17 %87 %90 %93 %96
               OpStore %78 %97
               OpBranch %76
         %98 = OpLabel
         %99 = OpAccessChain %84 %83 %11 %53
        %100 = OpLoad %8 %99
        %101 = OpConvertSToF %12 %100
        %102 = OpCompositeConstruct %17 %101 %101 %101 %101
               OpStore %78 %102
               OpBranch %76
         %76 = OpLabel
               OpReturn
               OpFunctionEnd
          %6 = OpFunction %2 None %3
          %7 = OpLabel
         %57 = OpVariable %56 Function
         %23 = OpAccessChain %22 %19 %21
         %24 = OpLoad %12 %23
         %31 = OpAccessChain %30 %29 %11 %11
         %32 = OpLoad %12 %31
         %34 = OpFOrdGreaterThan %33 %24 %32
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %36
         %35 = OpLabel
         %37 = OpAccessChain %22 %19 %21
         %38 = OpLoad %12 %37
         %39 = OpAccessChain %30 %29 %11 %11
         %40 = OpLoad %12 %39
         %41 = OpFOrdGreaterThan %33 %38 %40
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %43
         %42 = OpLabel
               OpBranch %44
         %44 = OpLabel
               OpLoopMerge %46 %47 None
               OpBranch %48
         %48 = OpLabel
         %49 = OpLoad %8 %10
         %51 = OpSLessThan %33 %49 %50
               OpBranchConditional %51 %45 %46
         %45 = OpLabel
         %52 = OpLoad %8 %10
         %54 = OpIAdd %8 %52 %53
               OpStore %10 %54
               OpBranch %47
         %47 = OpLabel
               OpBranch %44
         %46 = OpLabel
               OpStore %14 %55
               OpBranch %43
         %43 = OpLabel
         %58 = OpLoad %12 %14
         %59 = OpFSub %12 %55 %58
         %60 = OpLoad %12 %16
         %61 = OpFAdd %12 %59 %60
               OpStore %57 %61
         %63 = OpAccessChain %30 %29 %11 %62
         %64 = OpLoad %12 %63
         %65 = OpAccessChain %30 %29 %11 %11
         %66 = OpLoad %12 %65
         %67 = OpLoad %12 %57
         %68 = OpExtInst %12 %1 FClamp %64 %66 %67
               OpStore %16 %68
               OpBranch %36
         %36 = OpLabel
               OpReturn
               OpFunctionEnd
