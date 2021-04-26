; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 67
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %23 %55
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %20 "v"
               OpName %23 "gl_FragCoord"
               OpName %42 "buf1"
               OpMemberName %42 0 "one"
               OpName %44 ""
               OpName %55 "_GLF_color"
               OpName %59 "buf0"
               OpMemberName %59 0 "_GLF_uniform_int_values"
               OpName %61 ""
               OpDecorate %23 BuiltIn FragCoord
               OpMemberDecorate %42 0 Offset 0
               OpDecorate %42 Block
               OpDecorate %44 DescriptorSet 0
               OpDecorate %44 Binding 1
               OpDecorate %55 Location 0
               OpDecorate %58 ArrayStride 16
               OpMemberDecorate %59 0 Offset 0
               OpDecorate %59 Block
               OpDecorate %61 DescriptorSet 0
               OpDecorate %61 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeFunction %6
         %10 = OpTypeInt 32 1
         %11 = OpConstant %10 1
         %14 = OpConstant %6 1
         %18 = OpTypeVector %6 4
         %19 = OpTypePointer Function %18
         %21 = OpConstantComposite %18 %14 %14 %14 %14
         %22 = OpTypePointer Input %18
         %23 = OpVariable %22 Input
         %24 = OpTypeInt 32 0
         %25 = OpConstant %24 1
         %26 = OpTypePointer Input %6
         %29 = OpConstant %6 0
         %30 = OpTypeBool
         %42 = OpTypeStruct %24
         %43 = OpTypePointer Uniform %42
         %44 = OpVariable %43 Uniform
         %45 = OpConstant %10 0
         %46 = OpTypePointer Uniform %24
         %50 = OpConstant %24 2
         %54 = OpTypePointer Output %18
         %55 = OpVariable %54 Output
         %56 = OpConstantComposite %18 %14 %29 %29 %14
         %58 = OpTypeArray %10 %25
         %59 = OpTypeStruct %58
         %60 = OpTypePointer Uniform %59
         %61 = OpVariable %60 Uniform
         %62 = OpTypePointer Uniform %10
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %20 = OpVariable %19 Function
               OpStore %20 %21
         %27 = OpAccessChain %26 %23 %25
         %28 = OpLoad %6 %27
         %31 = OpFOrdLessThan %30 %28 %29
               OpSelectionMerge %33 None
               OpBranchConditional %31 %32 %33
         %32 = OpLabel
         %34 = OpFunctionCall %6 %8
         %35 = OpCompositeConstruct %18 %34 %34 %34 %34
               OpStore %20 %35
               OpBranch %33
         %33 = OpLabel
         %36 = OpLoad %18 %20
         %37 = OpExtInst %24 %1 PackUnorm4x8 %36
         %38 = OpIEqual %30 %37 %25
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %40
         %39 = OpLabel
               OpReturn
         %40 = OpLabel
         %47 = OpAccessChain %46 %44 %45
         %48 = OpLoad %24 %47
         %49 = OpShiftLeftLogical %24 %25 %48
         %51 = OpIEqual %30 %49 %50
               OpSelectionMerge %53 None
               OpBranchConditional %51 %52 %57
         %52 = OpLabel
               OpStore %55 %56
               OpBranch %53
         %57 = OpLabel
         %63 = OpAccessChain %62 %61 %45 %45
         %64 = OpLoad %10 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpCompositeConstruct %18 %65 %65 %65 %65
               OpStore %55 %66
               OpBranch %53
         %53 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
               OpSelectionMerge %13 None
               OpSwitch %11 %13 0 %12
         %12 = OpLabel
               OpReturnValue %14
         %13 = OpLabel
         %17 = OpUndef %6
               OpReturnValue %17
               OpFunctionEnd
