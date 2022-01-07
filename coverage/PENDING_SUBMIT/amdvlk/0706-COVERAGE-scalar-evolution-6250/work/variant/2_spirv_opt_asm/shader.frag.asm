; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 90
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %62
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %22 "gl_FragCoord"
               OpName %34 "f"
               OpName %36 "buf0"
               OpMemberName %36 0 "_GLF_uniform_float_values"
               OpName %38 ""
               OpName %62 "_GLF_color"
               OpName %65 "buf1"
               OpMemberName %65 0 "_GLF_uniform_int_values"
               OpName %67 ""
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %35 ArrayStride 16
               OpMemberDecorate %36 0 Offset 0
               OpDecorate %36 Block
               OpDecorate %38 DescriptorSet 0
               OpDecorate %38 Binding 0
               OpDecorate %62 Location 0
               OpDecorate %64 ArrayStride 16
               OpMemberDecorate %65 0 Offset 0
               OpDecorate %65 Block
               OpDecorate %67 DescriptorSet 0
               OpDecorate %67 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %9 = OpConstant %6 0
         %12 = OpConstant %6 1
         %19 = OpTypeFloat 32
         %20 = OpTypeVector %19 4
         %21 = OpTypePointer Input %20
         %22 = OpVariable %21 Input
         %23 = OpTypeInt 32 0
         %24 = OpConstant %23 1
         %25 = OpTypePointer Input %19
         %28 = OpConstant %19 0
         %29 = OpTypeBool
         %33 = OpTypePointer Function %19
         %35 = OpTypeArray %19 %24
         %36 = OpTypeStruct %35
         %37 = OpTypePointer Uniform %36
         %38 = OpVariable %37 Uniform
         %39 = OpTypePointer Uniform %19
         %50 = OpConstant %6 2
         %53 = OpConstant %6 5
         %57 = OpConstant %6 11
         %61 = OpTypePointer Output %20
         %62 = OpVariable %61 Output
         %63 = OpConstant %23 2
         %64 = OpTypeArray %6 %63
         %65 = OpTypeStruct %64
         %66 = OpTypePointer Uniform %65
         %67 = OpVariable %66 Uniform
         %68 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %34 = OpVariable %33 Function
               OpBranch %13
         %13 = OpLabel
         %88 = OpPhi %6 %12 %5 %48 %16
         %87 = OpPhi %6 %9 %5 %18 %16
               OpLoopMerge %15 %16 None
               OpBranch %14
         %14 = OpLabel
         %18 = OpIAdd %6 %87 %12
         %26 = OpAccessChain %25 %22 %24
         %27 = OpLoad %19 %26
         %30 = OpFOrdGreaterThan %29 %27 %28
               OpSelectionMerge %32 None
               OpBranchConditional %30 %31 %32
         %31 = OpLabel
         %42 = OpAccessChain %39 %38 %9 %9
         %43 = OpLoad %19 %42
         %44 = OpExtInst %19 %1 Modf %43 %34
         %46 = OpIAdd %6 %88 %12
               OpBranch %32
         %32 = OpLabel
         %89 = OpPhi %6 %88 %14 %46 %31
         %48 = OpIAdd %6 %89 %12
               OpBranch %16
         %16 = OpLabel
         %51 = OpINotEqual %29 %48 %50
         %54 = OpSLessThan %29 %18 %53
         %55 = OpLogicalAnd %29 %51 %54
               OpBranchConditional %55 %13 %15
         %15 = OpLabel
         %58 = OpIEqual %29 %48 %57
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %82
         %59 = OpLabel
         %69 = OpAccessChain %68 %67 %9 %9
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %19 %70
         %72 = OpAccessChain %68 %67 %9 %12
         %73 = OpLoad %6 %72
         %74 = OpConvertSToF %19 %73
         %81 = OpCompositeConstruct %20 %71 %74 %74 %71
               OpStore %62 %81
               OpBranch %60
         %82 = OpLabel
         %83 = OpAccessChain %68 %67 %9 %12
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %19 %84
         %86 = OpCompositeConstruct %20 %85 %85 %85 %85
               OpStore %62 %86
               OpBranch %60
         %60 = OpLabel
               OpReturn
               OpFunctionEnd
